import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgDeleteDenom } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/deet42.iodinecoinfull.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/deet42.iodinecoinfull.tokenfactory.MsgDeleteDenom", MsgDeleteDenom],
    ["/deet42.iodinecoinfull.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    
];

export { msgTypes }