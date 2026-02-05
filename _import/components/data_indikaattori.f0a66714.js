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

// ladataan datat
// indikaattorit
export const indicator_list = await FileAttachment({"name":"../../data/df_indicator_list.json","mimeType":"application/json","path":"../../_file/data/df_indicator_list.7ed13fb1.json","lastModified":1770285942744,"size":11141}, import.meta.url).json("typed");
//export const df = await FileAttachment("../data/df.json").json("typed");
export const df = await FileAttachment({"name":"../../data/df.csv","mimeType":"text/csv","path":"../../_file/data/df.d58f7c0d.csv","lastModified":1770285944344,"size":2523751}, import.meta.url).csv({typed: true});

export const df2 = df
//export const df_aikasarja = await FileAttachment("../data/df_aikasarja.json").json("typed");
export const df_aikasarja = await FileAttachment({"name":"../../data/df_aikasarja.csv","mimeType":"text/csv","path":"../../_file/data/df_aikasarja.4af18b8b.csv","lastModified":1770285946795,"size":32966604}, import.meta.url).csv({typed: true});
export const region_levels = ["Kunnat", "Hyvinvointialueet"];
export const df_region = await FileAttachment({"name":"../../data/df_region.json","mimeType":"application/json","path":"../../_file/data/df_region.ae39e874.json","lastModified":1770285949479,"size":257003}, import.meta.url).json("typed");
export const df_kuntalist = await FileAttachment({"name":"../../data/df_kuntalist.json","mimeType":"application/json","path":"../../_file/data/df_kuntalist.7358a0aa.json","lastModified":1770285951268,"size":38624}, import.meta.url).json("typed");
//export const df_population = await FileAttachment("../data/df_population.json").json("typed")

//export const df = df_raw.map((region_id, i) => Object.assign({}, region_id, df_population[i]));


export const all_var_class = [... new Set(df.map(x=>x.var_class))];

export const InputRegioLevel = Inputs.radio(region_levels, {
    //label: "Aluetaso",
     value: region_levels[1]});

export const SelYear = Inputs.range([2011, 2025], {step: 1, value: 2023});


export function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }

export function financial1(x) {
        return Number.parseFloat(x).toFixed(1);
    }

