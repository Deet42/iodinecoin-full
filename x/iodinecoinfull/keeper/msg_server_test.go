package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/Deet42/iodinecoin-full/testutil/keeper"
	"github.com/Deet42/iodinecoin-full/x/iodinecoinfull/keeper"
	"github.com/Deet42/iodinecoin-full/x/iodinecoinfull/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.IodinecoinfullKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
