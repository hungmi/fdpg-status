var settings = {
    "url": "https://j9dh3ne194.execute-api.ap-northeast-2.amazonaws.com/fdpg2021/signed_in_player_list",
    "method": "POST",
    "timeout": 0,
    "data": "",
};

window.addEventListener('load', function() {
    $.ajax(settings).done(function (response) {
        window.aaaa = response.body.signed_in_player_list
        // console.log(response.body.signed_in_player_list)
        // const the_json = response.body.signed_in_player_list
        const the_json = {"1ACx99rmZvc":971617,"SYZSDI7CPYQ":647384,"XgHJg1Gpx-o":972092,"JHQsA8chdHU":702356,"wroZD87sUxx":971617,"ncDLxjpUZzz":718849,"atn6yaELsvo":971616,"zora":691889,"NsC_s7Ly4Bs":875250,"R-XBUMIVQEE":971616,"QJYQ9BYpM74":642963,"KPHYxMxsMzg":665240,"1Dsgc-tz-YE":897146,"zDLbSizGrF4":726156,"BvUptMkW4kQ":608169,"2EPn7WHfQZM":608487,"UaUiXEuDA8A":638613,"w58cy7hs5xc":971614,"6eNaohd5j3c":605058,"G-aTkYLhxmc":720618,"7SDGPs8EBNM":975221,"pwe8r1NnwYU":782124,"yTPsDn-wsHM":928488,"JLJJKDFHAI8":731027,"IX6BFXSZE4A":680150,"Z1WDDHDY_GK":972880,"qrJaMwF96Fw":608248,"xCnzszAvzXc":869808,"PiogHWL3bCM":945526,"_8iJXu-xvmM":630079,"dgXicLeniSc":971616,"YR3BE7DYA9M":971615,"9yCPkzFDJcU":606980,"rqRwT5Vb3_M":731364,"7_x_sZKyzXs":699948,"s1aP3AnPD7Q":837484,"LDA64SHHFKG":608131,"Pas25Cwh4wg":643366,"iEyPpqTb-qE":629057,"1m26HzzHd_A":713425,"n8pSzdAwRwg":606870,"EU8HQyW91PY":878451,"GBAB6B9FDBU":597729,"zzXTPowxagc":622414,"CxTMNqSd-m8":651494,"zhGyuKAXy2o":856264,"vdNwdW_XKRk":712036,"IPWPIB6C8QZ":640763,"ENK7T-42XAC":618077,"kevin":965396,"Z-hceYARomE":626304,"7BRPXoQxxTQ":726745,"XRZ-69JKMBY":642835,"PQMdoeg29wE":730331,"JXAYFXZQY3A":971615,"NPJDMSZMKQ8":707400,"Xcp9yw8bvPM":637685,"H1TVAB1RGZG":971615,"HVEJ4OYS5JS":892421,"u-7x9oDmCgz":872150,"u9qgYbEmrko":770091,"JbdrrN_GEDU":971614,"C5cxmwqUWVE":725982,"Q5pmt9GMKzY":634233,"hungmi":529763,"MkpEVaT3Y7g":893717,"VKZHYQ7ZGCK":716743,"M9HTVBJOZPU":630146,"JEHX4LMW1YY":720046,"z5x8xfYgzgc":601948,"eBGhR4mj5Pz":626520,"8AJ_X4AKY_W":636778,"6z886oEjH1E":727091,"hQhqDmdBByw":811764,"6VU9FZOLTPG":700298,"MKMng_vxejc":833785,"2NQCITBOXJS":729873,"SMI13PE8TMG":623945,"DpPsciuHd8Q":971615,"Cu2sx6gzuds":721816,"WqV5fbXuoio":638254,"U3Y8KNS-KJW":677238,"4GQTV7SBW54":882970,"WJGZKPCZBZS":815412,"mycMGezyU7o":604247,"AvBDgbfs6SU":695111,"GU-bxYSxhCk":893553,"myRYmb87Fo4":890956,"polun":969869,"SUND QACL KDX":906447}
        var new_tds = ""
        for (const [fdid, time] of Object.entries(the_json)) {
            // console.log(fdid, time)
            new_tds = new_tds + `<tr><td>${fdid}</td></tr>`
        }
        document.getElementById('tbody').innerHTML = new_tds
    });

    // window.response = "{\"1ACx99rmZvc\":\"0.97161707872e6\",\"SYZSDI7CPYQ\":\"0.647384487371421e6\",\"XgHJg1Gpx-o\":\"0.972092018462212e6\",\"JHQsA8chdHU\":\"0.702356524849841e6\",\"wroZD87sUxx\":\"0.9716173003e6\",\"ncDLxjpUZzz\":\"0.718849001624612e6\",\"atn6yaELsvo\":\"0.971616566606e6\",\"zora\":\"0.69188926072435e6\",\"NsC_s7Ly4Bs\":\"0.875250423162674e6\",\"R-XBUMIVQEE\":\"0.971616272514e6\",\"QJYQ9BYpM74\":\"0.642963887117664e6\",\"KPHYxMxsMzg\":\"0.665240664672851e6\",\"1Dsgc-tz-YE\":\"0.897146549303589e6\",\"zDLbSizGrF4\":\"0.726156285002024e6\",\"BvUptMkW4kQ\":\"0.608169329498418e6\",\"2EPn7WHfQZM\":\"0.608487213418609e6\",\"UaUiXEuDA8A\":\"0.638613990010665e6\",\"w58cy7hs5xc\":\"0.971614756337e6\",\"6eNaohd5j3c\":\"0.605058280802582e6\",\"G-aTkYLhxmc\":\"0.720618836626296e6\",\"7SDGPs8EBNM\":\"0.969893270565525e6\",\"pwe8r1NnwYU\":\"0.782124878316839e6\",\"yTPsDn-wsHM\":\"0.928488601176193e6\",\"JLJJKDFHAI8\":\"0.731027886799103e6\",\"IX6BFXSZE4A\":\"0.680150799941042e6\",\"qrJaMwF96Fw\":\"0.60824820875174e6\",\"xCnzszAvzXc\":\"0.869808219659887e6\",\"PiogHWL3bCM\":\"0.945526170862567e6\",\"_8iJXu-xvmM\":\"0.630079857558437e6\",\"dgXicLeniSc\":\"0.971616858442e6\",\"YR3BE7DYA9M\":\"0.971615684088e6\",\"9yCPkzFDJcU\":\"0.606980047512285e6\",\"rqRwT5Vb3_M\":\"0.731364630054343e6\",\"7_x_sZKyzXs\":\"0.699948058595058e6\",\"s1aP3AnPD7Q\":\"0.837484007857476e6\",\"LDA64SHHFKG\":\"0.60813141128908e6\",\"Pas25Cwh4wg\":\"0.643366382467681e6\",\"iEyPpqTb-qE\":\"0.629057698644562e6\",\"1m26HzzHd_A\":\"0.71342503424537e6\",\"n8pSzdAwRwg\":\"0.606870808712342e6\",\"EU8HQyW91PY\":\"0.878451599096981e6\",\"GBAB6B9FDBU\":\"0.59772982198443e6\",\"zzXTPowxagc\":\"0.622414944304176e6\",\"CxTMNqSd-m8\":\"0.651494326287455e6\",\"zhGyuKAXy2o\":\"0.856264940017207e6\",\"vdNwdW_XKRk\":\"0.712036766203624e6\",\"IPWPIB6C8QZ\":\"0.640763765853198e6\",\"ENK7T-42XAC\":\"0.618077879834358e6\",\"kevin\":\"0.965396237378645e6\",\"Z-hceYARomE\":\"0.626304199130921e6\",\"7BRPXoQxxTQ\":\"0.726745557192208e6\",\"XRZ-69JKMBY\":\"0.642835120820661e6\",\"PQMdoeg29wE\":\"0.730331885611648e6\",\"JXAYFXZQY3A\":\"0.971615977639e6\",\"NPJDMSZMKQ8\":\"0.707400990761418e6\",\"Xcp9yw8bvPM\":\"0.63768599463004e6\",\"H1TVAB1RGZG\":\"0.971615097627e6\",\"HVEJ4OYS5JS\":\"0.892421346121092e6\",\"u-7x9oDmCgz\":\"0.872150293065382e6\",\"u9qgYbEmrko\":\"0.770091951046415e6\",\"JbdrrN_GEDU\":\"0.971614390974e6\",\"C5cxmwqUWVE\":\"0.725982322315699e6\",\"Q5pmt9GMKzY\":\"0.634233381031599e6\",\"hungmi\":\"0.529763360094927e6\",\"MkpEVaT3Y7g\":\"0.893717893030397e6\",\"VKZHYQ7ZGCK\":\"0.71674356277322e6\",\"M9HTVBJOZPU\":\"0.630146424342437e6\",\"JEHX4LMW1YY\":\"0.720046190073382e6\",\"z5x8xfYgzgc\":\"0.601948871791401e6\",\"eBGhR4mj5Pz\":\"0.626520186457491e6\",\"8AJ_X4AKY_W\":\"0.636778347937547e6\",\"6z886oEjH1E\":\"0.727091698877251e6\",\"hQhqDmdBByw\":\"0.811764270162058e6\",\"6VU9FZOLTPG\":\"0.700298814773369e6\",\"MKMng_vxejc\":\"0.833785574433241e6\",\"2NQCITBOXJS\":\"0.729873481986861e6\",\"SMI13PE8TMG\":\"0.623945763516613e6\",\"DpPsciuHd8Q\":\"0.971615389817e6\",\"Cu2sx6gzuds\":\"0.721816508621297e6\",\"WqV5fbXuoio\":\"0.638254551234536e6\",\"U3Y8KNS-KJW\":\"0.677238486475017e6\",\"4GQTV7SBW54\":\"0.882970601810162e6\",\"WJGZKPCZBZS\":\"0.815412277859078e6\",\"mycMGezyU7o\":\"0.604247240964917e6\",\"AvBDgbfs6SU\":\"0.695111535695915e6\",\"GU-bxYSxhCk\":\"0.893553018917585e6\",\"myRYmb87Fo4\":\"0.890956922499783e6\",\"polun\":\"0.969869113670163e6\",\"SUND QACL KDX\":\"0.906447276425655e6\"}"
    // for (var prop in JSON.parse(window.response)) {
    //     console.log(prop, JSON.parse(window.response)[prop])
    // }
})