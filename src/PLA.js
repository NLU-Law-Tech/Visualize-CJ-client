import React, { useState } from "react"
import { axios } from './reducers/MainReducer'
import { HlLayer, HlList } from 'react-transformer-qa-decode-visualize'
import 'react-transformer-qa-decode-visualize/dist/index.css'
import LoadingMask from './modules/loadingModule'
import { setAppLoading } from './reducers/MainReducer'
import { useDispatch } from 'react-redux'

export default function PLA() {
    let dispatch = useDispatch()
    let [defendants, setDefendants] = useState([])
    let [context, setContext] = useState("")
    let [parseResults, setParseResults] = useState([])
    let [currentSelectDefendant, setCurrentSelectDefendant] = useState(undefined)


    function submit() {
        dispatch(setAppLoading(true))
        axios.post('/parse-phone-license-account', {
            context,
            defendants
        })
            .then((res) => {
                console.log(res.data)
                let { parse_results } = res.data
                setParseResults(parse_results)
            })
            .then(() => {
                dispatch(setAppLoading(false))
            })
    }

    let colors = ['red', 'blue', 'yellow', 'orange', 'brown', 'coral', 'crimson', 'DodgerBlue', 'Chartreuse', 'gray']

    console.log(parseResults)
    console.log(currentSelectDefendant)

    return (
        <div className="container">
            <br />
            <span className='float-right'>
                <a href="/?page=app1">
                    分析職稱、單位與法條
                </a>
            </span>
            <h3>AI視覺化判決書分析<br /><small>車牌、手機與銀行帳戶</small></h3>

            <br />
            <h5>被告</h5>
            <input className="w-100 form-control" placeholder="多被告請用;分隔" type="text" value={defendants.join(";")} onChange={(e) => {
                setDefendants(e.target.value.split(";"))
                setParseResults([])
                setCurrentSelectDefendant("")
            }} />
            <br />

            <h5>判決書 <button className="btn btn-secondary mb-2 btn-sm" onClick={()=>{
                setContext("臺灣屏東地方法院刑事簡易判決105年度交簡字第1971號聲請人臺灣屏東地方法院檢察署檢察官被告蕭志中上列被告因公共危險案件，經檢察官聲請以簡易判決處刑（105年度偵字第6594號），本院判決如下：主文蕭志中犯不能安全駕駛動力交通工具罪，處有期徒刑參月，如易科罰金，以新臺幣壹仟元折算壹日。事實及理由一、蕭志中於民國105年8月28日12時至同日12時30分許，在屏東縣屏東市歸仁路某雜貨店內飲用酒類後，吐氣所含酒精濃度達每公升0.25毫克以上之程度，猶基於不能安全駕駛動力交通工具之犯意，於同日12時50分許，騎乘車牌號碼000-000號普通重型機車上路。 二、論罪科刑：(一)按刑法上之幫助犯，係對於犯罪與正犯有共同之認識，而以幫助之意思，對於正犯資以助力，而未參與實施犯罪之行為者而言。本件被告王大明提供其所有之臺灣銀行中屏分行之帳號123000000000號帳戶（下稱上開臺銀帳戶）、中華郵政股份有限公司屏東公館之帳號45600000000000號帳戶（下稱上開郵局帳戶）使被害人林復翔、陳梓維、王厚強、康瑋倩及林世媛等5人分別匯入如附件之附表編號1至5所示之款項至上開臺銀帳戶、上開郵局帳戶，惟其並未實際參與詐騙集團成員對上開被害人施用詐術之行為，是核被告所為，二、案經臺北市政府警察局中山分局報告偵辦。證據並所犯法條一、前揭犯罪事實，業據被告蕭志中於偵查中坦承不諱並有台灣大哥大手機門號0936123321行動電話/第三代行動通信/行動寬頻業務申請書影本、用戶授權代辦委託書影本、台灣之星手機門號0936123321第三代行動通信/行動寬頻業務申請書影本，號碼可攜服務申請書影本、證人陳思達提出之電話錄音光碟1片、本署檢察事務官勘驗報告1份附卷可稽，足證被告犯行之自白與事實相符，應堪採信，從而，本件事證已臻明確，被告誣告犯嫌洵堪認定。二、核被告所為，係犯刑法第171條第1項之未指定犯人之誣告罪嫌。至報告意旨認被告所為係犯刑法第339條第1項之罪嫌云云，容有誤會，而證人陳思達對被告提出詐欺取財告訴部分，已另行簽分偵辦，併此敘明。三、依刑事訴訟法第451條第1項聲請逕以簡易判決處刑。此致臺灣屏東地方法院中華民國107年6月28日檢察官陳盈辰本件正本證明與原本無異中華民國107年7月8日書記官徐壽延")
                setDefendants(['蕭志中', '王大明'])
            }}>帶入範例</button></h5>
            <textarea className="form-control" style={{ width: '100%', height: 400 }} value={context} onChange={(e) => setContext(e.target.value)}></textarea>
            <br />
            <button className="btn btn-secondary" onClick={submit}>開始分析</button>

            <hr />

            {parseResults.length > 0 && defendants.map((defendant, i) => {
                return (
                    <button className="btn btn-sm btn-light ml-1" key={i} onClick={() => setCurrentSelectDefendant(defendant)}>{defendant}</button>
                )
            })}

            <div key={currentSelectDefendant} style={{ width: 800, padding: 20 }}>
                {currentSelectDefendant && parseResults.map((defendant,i) => {
                    if (defendant.name === currentSelectDefendant) {
                        return (
                            <div key={i}>
                                {defendant.v_data.map((cq, i) => {
                                    return (
                                        <div key={i}>
                                            <p>{cq.question}</p>
                                            <HlList key={i} data={cq} color={colors[i]} />
                                            <hr />
                                        </div>
                                    )
                                })}
                                <hr />
                                <div className="position-relative">
                                    {defendant.v_data.length >0 && defendant.v_data[0].context}
                                    <div className="span-hl-container align-to-parent">
                                        {defendant.v_data.map((cq, i) => {
                                            return <HlLayer key={i} data={cq} color={colors[i]} />
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return <></>
                })}
                <hr />
            </div>
            <LoadingMask />
        </div>

    )
}