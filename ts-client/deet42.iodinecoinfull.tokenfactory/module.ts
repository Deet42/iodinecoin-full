// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgDeleteDenom } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";


export { MsgCreateDenom, MsgDeleteDenom, MsgUpdateDenom };

type sendMsgCreateDenomParams = {
  value: MsgCreateDenom,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteDenomParams = {
  value: MsgDeleteDenom,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateDenomParams = {
  value: MsgUpdateDenom,
  fee?: StdFee,
  memo?: string
};


type msgCreateDenomParams = {
  value: MsgCreateDenom,
};

type msgDeleteDenomParams = {
  value: MsgDeleteDenom,
};

type msgUpdateDenomParams = {
  value: MsgUpdateDenom,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateDenom({ value, fee, memo }: sendMsgCreateDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateDenom({ value: MsgCreateDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteDenom({ value, fee, memo }: sendMsgDeleteDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteDenom({ value: MsgDeleteDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateDenom({ value, fee, memo }: sendMsgUpdateDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateDenom({ value: MsgUpdateDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateDenom({ value }: msgCreateDenomParams): EncodeObject {
			try {
				return { typeUrl: "/deet42.iodinecoinfull.tokenfactory.MsgCreateDenom", value: MsgCreateDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateDenom: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteDenom({ value }: msgDeleteDenomParams): EncodeObject {
			try {
				return { typeUrl: "/deet42.iodinecoinfull.tokenfactory.MsgDeleteDenom", value: MsgDeleteDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteDenom: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateDenom({ value }: msgUpdateDenomParams): EncodeObject {
			try {
				return { typeUrl: "/deet42.iodinecoinfull.tokenfactory.MsgUpdateDenom", value: MsgUpdateDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateDenom: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			Deet42IodinecoinfullTokenfactory: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;