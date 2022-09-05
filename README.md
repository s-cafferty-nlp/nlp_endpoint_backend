# How to deploy a Hugging Face model with AWS.

## 1. Sagemaker Endpoint

### Create an endpoint in a Sagemaker notebook [like so](https://github.com/s-cafferty-nlp/nlp_endpoint_backend/blob/main/sagemaker_deploy_endpoint.ipynb).

### Do NOT forget to .delete_endpoint(), or AWS will charge you a bunch of money.

## 2. Create a Lambda Function that Interacts with Sagemaker Endpoint

### In our case, the lambda function looks like this:

![](https://github.com/s-cafferty-nlp/nlp_endpoint_backend/blob/main/images/lambda_function.png)

## 3. Deploy the Endpoint Online with API Gateway 

### Be sure to point the API at the lambda function and configure the mapping template appropriately. In most inference cases, we want to make a POST request.

![](https://github.com/s-cafferty-nlp/nlp_endpoint_backend/blob/main/images/api_gateway.png)

## If you properly deploy the endpoint, you should use the link found in API Gateway in your backend. In our case, the link can be found in [this file](https://github.com/s-cafferty-nlp/nlp_endpoint_backend/blob/main/backend/controllers/inferenceController.js).  
