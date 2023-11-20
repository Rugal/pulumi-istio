// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export { TelemetryArgs } from "./telemetry";
export type Telemetry = import("./telemetry").Telemetry;
export const Telemetry: typeof import("./telemetry").Telemetry = null as any;
utilities.lazyLoad(exports, ["Telemetry"], () => require("./telemetry"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "kubernetes:telemetry.istio.io/v1alpha1:Telemetry":
                return new Telemetry(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("crds", "telemetry.istio.io/v1alpha1", _module)
