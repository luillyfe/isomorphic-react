# Deploy to Cloud Run has the following implications
# --memory 8G: it was the least amount of memory for which the service was able to run.
# -cpu 2: 8G of memory also imples using 2 CPUs
# --max-instances 2: deafult is higher but we have a limition of 20G per application.
gcloud run services isomorphic-react \
    --memory 8G \
    --cpu 2 \
    --max-instances 2

# Common erros:
ERROR: (gcloud.run.services.update) spec.template.spec.containers.resources.limits.cpu: 
Invalid value specified for cpu. For the specified value, maxScale may not exceed 2.
Consider running your workload in a region with greater capacity, decreasing your requested cpu-per-instance, or requesting an increase in quota for this region if you are seeing sustained usage near this limit, see https://cloud.google.com/run/quotas. Your project may gain access to further scaling by adding billing information to your account.

# Solution
Increase memory until it gets ready and running

    --memory 8G \