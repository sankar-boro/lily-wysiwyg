#!/usr/bin/env node
// Copyright 2017-2022 @polkadot/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

import cp from "child_process";
import c from "cross-env";

async function main() {
    cp.execSync(`cp package.json ./build/package.json`);
}

main().catch((error) => {
    console.error(error);
    process.exit(-1);
});