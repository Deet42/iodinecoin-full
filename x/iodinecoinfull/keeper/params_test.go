package keeper_test

import (
	"testing"

	testkeeper "github.com/Deet42/iodinecoin-full/testutil/keeper"
	"github.com/Deet42/iodinecoin-full/x/iodinecoinfull/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.IodinecoinfullKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
