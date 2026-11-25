import {readFile} from 'node:fs/promises';import {resolve,join,dirname} from 'node:path';import {fileURLToPath} from 'node:url';import {spawnSync} from 'node:child_process';
import {publishArtifacts,sha256} from '@qaick/release-protection';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),[version,directory,mode]=process.argv.slice(2);
if(!/^\d+\.\d+\.\d+$/.test(version??'')||!directory||mode&&mode!=='--verify-only')throw Error('Usage: npm run publish:desktop -- VERSION ARTIFACT_DIRECTORY [--verify-only]');
const release=join(root,'installers',version),records=JSON.parse(await readFile(join(release,'artifacts.json'),'utf8'));
const sums=await readFile(join(release,'SHA256SUMS'),'utf8'),artifacts=[];
if(!records.length)throw Error('No release manifest artifacts');
for(const record of records){
 if(record.filename!==record.filename.split(/[\\/]/).pop()||!/\.(AppImage|deb|exe|dmg)$/.test(record.filename)||!record.filename.includes(version))throw Error('Invalid release artifact identity');
 const file=resolve(directory,record.filename),bytes=await readFile(file);
 if(bytes.length!==record.bytes||sha256(bytes)!==record.sha256||!sums.split(/\r?\n/).includes(record.sha256+'  '+record.filename))throw Error('Release manifest/checksum mismatch: '+record.filename);
 artifacts.push(file);
}
await publishArtifacts(artifacts,()=>{
 if(mode==='--verify-only'){console.log('All exact release artifacts passed mandatory protection verification. Nothing uploaded.');return;}
 // OWNER release authorization is still required before invoking this command.
 const result=spawnSync('gh',['release','upload','v'+version,...artifacts,join(release,'SHA256SUMS'),'--repo','vladmus/QAICK-Releases','--clobber'],{stdio:'inherit'});
 if(result.error)throw result.error;if(result.status!==0)throw Error('Release upload failed: '+result.status);
});
