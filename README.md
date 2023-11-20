# Istio custom resource definition generated for Typescript

## Usage

### installation

```shell
yarn add @taxistake/pulumi-istio
```

### create CRD just like K8S

```typescript
import * as istio from "@taxistake/pulumi-istio";

const vs = new istio.networking.v1beta1.VirtualService(name, {
      metadata: {
        name,
        namespace: args.namespace,
      },
      spec: {
        gateways: args.gateway,
        hosts: args.hosts,
        http: [
          {
            match: [
              {
                uri: { prefix: "/" },
              },
            ],
            route: [
              {
                destination: {
                  host: this.service.metadata.name,
                  port: {
                    number: 80,
                  },
                },
              },
            ],
          },
        ],
      },
    }, {
      parent: this,
    });
```

## Contribution

1. Download `istio` package
   Will find CRD files in it

   ```shell
   curl -L https://istio.io/downloadIstio | sh -
   ```

1. Generate the base

   ```shell
   crd2pulumi --nodejsPath src istio/manifests/charts/base/crds/crd-all.gen.yaml
   ```
1. Replace ` | undefined>` with `>`

   ```shell
   sed -i 's/ | undefined>/>/g' src/*
   ```
1. Replace `pulumi.Output<ObjectMeta>` with `pulumi.Output<k8s.types.output.meta.v1.ObjectMeta>`;   
   Also add `import * as k8s from "@pulumi/kubernetes";` on the top of the changed files.  
   The later part is tedious, one must manually add it.  

1. Add more fields for `AuthorizationPolicy`  
   There is `AuthorizationPolicy` in CRD file, but it does not contain complete configurable fields as specified in [document](https://istio.io/latest/docs/reference/config/security/authorization-policy/).
   You may update the CRD to have it, or just update the generated code to have it as well

1. Then you can build the package and deploy it to npm
   ```shell
   yarn build && yarn deploy
   ```