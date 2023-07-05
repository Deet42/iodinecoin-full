package keeper

import (
	"github.com/Deet42/iodinecoin-full/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
