// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./authorizationPolicy";
export * from "./peerAuthentication";
export * from "./requestAuthentication";

// Import resources to register:
import { AuthorizationPolicy } from "./authorizationPolicy";
import { PeerAuthentication } from "./peerAuthentication";
import { RequestAuthentication } from "./requestAuthentication";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:security.istio.io/v1beta1:AuthorizationPolicy":
                return new AuthorizationPolicy(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:PeerAuthentication":
                return new PeerAuthentication(name, <any>undefined, { urn })
            case "kubernetes:security.istio.io/v1beta1:RequestAuthentication":
                return new RequestAuthentication(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "security.istio.io/v1beta1", _module)
