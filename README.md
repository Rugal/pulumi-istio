# Istio custom resource definition generated for Typescript

## Usage

### installation

```shell
yarn add @rugal/pulumi-istio
```

### create CRD just like K8S

```typescript
import * as istio from "@rugal/pulumi-istio";

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

1. Generate the base

   ```shell
   crd2pulumi --nodejsPath src istio/manifests/charts/base/crds/crd-all.gen.yaml
   ```
2. Replace ` | undefined>` with `>`

   ```shell
   sed -i 's/ | undefined>/>/g' src/*
   ```
3. Replace `pulumi.Output<ObjectMeta>` with `pulumi.Output<k8s.types.output.meta.v1.ObjectMeta>`;   
   Also add `import * as k8s from "@pulumi/kubernetes";` on the top of the changed files.  
   The later part is tedious, one must manually add it.  
