import { FileAttachment } from "../../_observablehq/stdlib.30ca1e0e.js";
import { resize } from "../../_observablehq/stdlib.30ca1e0e.js";
import { html } from "../../_npm/htl@0.3.1/72f4716c.js";
import * as Plot from "../../_npm/@observablehq/plot@0.6.17/d761ef9b.js";
import * as d3 from "../../_npm/d3@7.9.0/e780feca.js";
import * as _ from "../../_npm/underscore@1.13.7/6e2fdb76.js";
import * as Inputs from "../../_observablehq/stdlib/inputs.674eed42.js";
import * as aq from "../../_npm/arquero@8.0.1/fe438a80.js";
import { all, desc, op, table } from "../../_npm/arquero@8.0.1/fe438a80.js";

var now =  Date().toLocaleString()
let text = now.toLocaleString("fi-FI")

// postinumerot
export const dfzip = await FileAttachment({"name":"../../data/dfzip.csv","mimeType":"text/csv","path":"../../_file/data/dfzip.3509e648.csv","lastModified":1743693278726,"size":2248858}, import.meta.url).csv({typed: true})
//export const dfzip = await FileAttachment("../data/dfzip.json").json("typed")
//export const dfzip_aikasarja = await FileAttachment("../data/dfzip_aikasarja.json").json("typed")
export const dfzip_aikasarja = await FileAttachment({"name":"../../data/dfzip_aikasarja.csv","mimeType":"text/csv","path":"../../_file/data/dfzip_aikasarja.3453e696.csv","lastModified":1743693281211,"size":26053665}, import.meta.url).csv({typed: true})
export const dfzip_region = await FileAttachment({"name":"../../data/dfzip_region.json","mimeType":"application/json","path":"../../_file/data/dfzip_region.a5e5af4a.json","lastModified":1743693284466,"size":26363210}, import.meta.url).json("typed")
