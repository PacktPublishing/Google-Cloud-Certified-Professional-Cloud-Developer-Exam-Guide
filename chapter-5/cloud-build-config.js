{
"steps": [
{
"name": "gcr.io/cloud-builders/gke-deploy",
"args": [
"run",
"--filename=kubernetes-resource-file", 
"--location=location",
"--cluster=cluster"
]
}
]
}