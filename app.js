steps:
# Pull the existing image
 - name: 'gcr.io/cloud-builders/docker'
   entrypoint: 'bash'
   args:
    - '-c'
    - |
      docker pull gcr.io/$PROJECT_ID/tomcat:latest || exit 0
# Build a docker image
 - name: 'gcr.io/cloud-builders/docker'
   args: [ 'build', '-t', 'gcr.io/$PROJECT_ID/tomcat', '--cache-from', 'gcr.io/$PROJECT_ID/tomcat', '.' ]
# Push the docker image to container registry
 - name: 'gcr.io/cloud-builders/docker'
   args: ["push", "gcr.io/$PROJECT_ID/tomcat"]
# Deploy an image from Container Registry to Cloud Run
 - name: 'gcr.io/cloud-builders/gcloud'
   args: ['beta', 'run', 'deploy', 'tomcat', '--image', 'gcr.io/$PROJECT_ID/tomcat:latest', '--region', 'europe-west1', '--platform', 'managed', '--allow-unauthenticated']
images:
 - 'gcr.io/$PROJECT_ID/tomcat'
