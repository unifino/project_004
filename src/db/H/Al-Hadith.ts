import * as TS                          from "@/../types/myTypes"
import * as tools                       from "@/mixins/tools"

let k = require( "./الکافی.json" ) as TS.HDB;
const q = require( "./غررالحکم.json" ) as TS.HDB;
const m = require( "./متفرقه.json" ) as TS.HDB;
const n = require( "./نهج‌الفصاحة.json" ) as TS.HDB;
const b = require( "./نهج‌البلاغة.json" ) as TS.HDB;
const z = require( "./كنز‌العمّال.json" ) as TS.HDB;
const h = require( "./بحار‌الأنوار.json" ) as TS.HDB;
const t = require( "./تحف‌العقول.json" ) as TS.HDB;
const v = require( "./وسائل‌الشيعه.json" ) as TS.HDB;


for ( let p of k ) p.d = tools.arabicDigits( "الکافی، الحدیث: " + p.d );

export const Hadith = [ 
    ...k,...q,...m,...n,...b,...z,...h,...t,...v
];
