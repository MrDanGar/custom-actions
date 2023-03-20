const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run () {
    core.notice('Hello from my custom JS-Action');
    upload();
}

function upload() {
    // 1) get input 
    const bucket = core.getInput('bucket', { rquired: true });
    const bucketRegion = core.getInput('bucket-region', { require: true });
    const distFolder = core.getInput('dist-folder', {require: true});

    // 2) upload files
    const s3URI = `s3://${bucket}`;
    core.notice(`bucket: ${bucket}`);
    core.notice(`bucket region: ${bucketRegion}`);
    core.notice(`dist folder: ${distFolder}`);
    //exec.exec(`aws s3 sync ${bucket} ${s3URI} --region ${bucketRegion}`);

    core.setOutput('url', 'This an the output from the JS action');
}

run();