// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./destinationRule";
export * from "./envoyFilter";
export * from "./gateway";
export * from "./serviceEntry";
export * from "./sidecar";
export * from "./virtualService";
export * from "./workloadEntry";
export * from "./workloadGroup";

// Import resources to register:
import { DestinationRule } from "./destinationRule";
import { EnvoyFilter } from "./envoyFilter";
import { Gateway } from "./gateway";
import { ServiceEntry } from "./serviceEntry";
import { Sidecar } from "./sidecar";
import { VirtualService } from "./virtualService";
import { WorkloadEntry } from "./workloadEntry";
import { WorkloadGroup } from "./workloadGroup";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:networking.istio.io/v1alpha3:DestinationRule":
                return new DestinationRule(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:EnvoyFilter":
                return new EnvoyFilter(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:ServiceEntry":
                return new ServiceEntry(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:Sidecar":
                return new Sidecar(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:VirtualService":
                return new VirtualService(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:WorkloadEntry":
                return new WorkloadEntry(name, <any>undefined, { urn })
            case "kubernetes:networking.istio.io/v1alpha3:WorkloadGroup":
                return new WorkloadGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "networking.istio.io/v1alpha3", _module)
