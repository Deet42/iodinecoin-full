package iodinecoinfull_test

import (
	"testing"

	keepertest "github.com/Deet42/iodinecoin-full/testutil/keeper"
	"github.com/Deet42/iodinecoin-full/testutil/nullify"
	"github.com/Deet42/iodinecoin-full/x/iodinecoinfull"
	"github.com/Deet42/iodinecoin-full/x/iodinecoinfull/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.IodinecoinfullKeeper(t)
	iodinecoinfull.InitGenesis(ctx, *k, genesisState)
	got := iodinecoinfull.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
