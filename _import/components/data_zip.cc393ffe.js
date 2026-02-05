import { FileAttachment } from "../../_observablehq/stdlib.bfa788ea.js";
import { resize } from "../../_observablehq/stdlib.bfa788ea.js";
import { html } from "../../_npm/htl@0.3.1/72f4716c.js";
import * as Plot from "../../_npm/@observablehq/plot@0.6.17/7c43807f.js";
import * as d3 from "../../_npm/d3@7.9.0/e324157d.js";
import * as _ from "../../_npm/underscore@1.13.7/6e2fdb76.js";
import * as Inputs from "../../_observablehq/stdlib/inputs.cba0987f.js";
import * as aq from "../../_npm/arquero@8.0.3/22cdc7f2.js";
import { all, desc, op, table } from "../../_npm/arquero@8.0.3/22cdc7f2.js";

var now =  Date().toLocaleString()
let text = now.toLocaleString("fi-FI")

// postinumerot
export const dfzip = await FileAttachment({"name":"../../data/dfzip.csv","mimeType":"text/csv","path":"../../_file/data/dfzip.b65e4d2b.csv","lastModified":1770285954934,"size":1780092}, import.meta.url).csv({typed: true})
//export const dfzip = await FileAttachment("../data/dfzip.json").json("typed")
//export const dfzip_aikasarja = await FileAttachment("../data/dfzip_aikasarja.json").json("typed")
export const dfzip_aikasarja = await FileAttachment({"name":"../../data/dfzip_aikasarja.csv","mimeType":"text/csv","path":"../../_file/data/dfzip_aikasarja.64a30458.csv","lastModified":1770285956797,"size":22318389}, import.meta.url).csv({typed: true})
export const dfzip_region = await FileAttachment({"name":"../../data/dfzip_region.json","mimeType":"application/json","path":"../../_file/data/dfzip_region.60798aaf.json","lastModified":1770285959373,"size":26389600}, import.meta.url).json("typed")
