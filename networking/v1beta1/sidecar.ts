// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as k8s from "@pulumi/kubernetes";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

export class Sidecar extends pulumi.CustomResource {
    /**
     * Get an existing Sidecar resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Sidecar {
        return new Sidecar(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:networking.istio.io/v1beta1:Sidecar';

    /**
     * Returns true if the given object is an instance of Sidecar.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Sidecar {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Sidecar.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"networking.istio.io/v1beta1">;
    public readonly kind!: pulumi.Output<"Sidecar">;
    public readonly metadata!: pulumi.Output<k8s.types.output.meta.v1.ObjectMeta>;
    /**
     * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
     */
    public readonly spec!: pulumi.Output<outputs.networking.v1beta1.SidecarSpec>;
    public readonly status!: pulumi.Output<{[key: string]: any}>;

    /**
     * Create a Sidecar resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SidecarArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "networking.istio.io/v1beta1";
            resourceInputs["kind"] = "Sidecar";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        } else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Sidecar.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Sidecar resource.
 */
export interface SidecarArgs {
    apiVersion?: pulumi.Input<"networking.istio.io/v1beta1">;
    kind?: pulumi.Input<"Sidecar">;
    metadata?: pulumi.Input<ObjectMeta>;
    /**
     * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
     */
    spec?: pulumi.Input<inputs.networking.v1beta1.SidecarSpecArgs>;
    status?: pulumi.Input<{[key: string]: any}>;
}
