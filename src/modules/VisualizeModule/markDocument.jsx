import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

const DefendantsCard = ({ self, defendantsWithColor }) => {
    return (
        <div className="row">
            {defendantsWithColor.map((defendant, index) => {
                return (
                    <div key={index}
                        className="col-md-4 col-12"
                        style={{ padding: 5 }}
                    >
                        <div
                            className="card"
                            style={{
                                borderColor: `rgb(${defendant.color})`,
                                borderWidth: 3,
                                backgroundColor:'rgba(250,250,250)'
                            }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">{defendant.name}(被告)</h5>
                                <h6>候選結果</h6>
                                <ul>
                                    {defendant.candicate_positions.length === 0?
                                    <p>無分析結果</p>
                                    :null}
                                    {defendant.candicate_positions.map((positions, p_index) => {
                                        return (
                                            <li key={p_index} style={{ 
                                                listStyle: 'decimal',
                                                fontSize: p_index === 0?18:14,
                                                fontWeight: p_index === 0?'bold':'normal',
                                                 }}>
                                                <button
                                                    style={{
                                                        fontSize: p_index === 0?18:14,
                                                        fontWeight: p_index === 0?'bold':'normal',
                                                    }}
                                                    className="btn btn-sm position-link"
                                                    onClick={() => {
                                                        self.scrollToRef(`${defendant.name}-${positions[0].substring(0, 1)}`)
                                                    }}>{positions[0].substring(0, 15)}</button>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const INFO_BOARD_HEIGHT = 270

class markDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixedDefendantsCard: false
        };
        this.markRefs = []
        this.DefendantsCardRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        try {
            var rect = this.DefendantsCardRef.current.getBoundingClientRect();
            let { fixedDefendantsCard } = this.state
            if (rect.top < 0) {
                this.setState({
                    fixedDefendantsCard: true
                })
            }
            else if (fixedDefendantsCard === true && rect.top >= 0) {
                this.setState({
                    fixedDefendantsCard: false
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    stringEncode = (str) => {
        return btoa(unescape(encodeURIComponent(str)))
    }

    scrollToRef = (tag) => {
        for (var i = 0; i < this.markRefs.length; i++) {
            let refObj = this.markRefs[i],
                { name, ref } = refObj
            if (name === tag) {
                console.log(refObj)
                console.log(name, tag, name === tag)
                window.scrollTo(0, ref.current.offsetTop - INFO_BOARD_HEIGHT)
                break
            }
        }
    }

    assignDefendantsColor = (defendants) => {
        // 分配顏色給每一個被告
        // [name, color]
        let availableColors = ['0, 155, 119', '42, 75, 124', '225, 93, 68', '239, 192, 80', '85, 180, 176', '224, 129, 25', '130, 46, 214', '214, 156, 47']
        return defendants.map((defendant, index) => {
            if (index < availableColors.length) {
                return { name: defendant.name, candicate_positions: defendant.candicate_positions, color: availableColors[index] }
            }
            else {
                return { name: defendant.name, candicate_positions: defendant.candicate_positions, color: availableColors[availableColors.length - 1] }
            }
        })
    }

    highlight = (defendants, tokens, marks) => {
        this.markRefs = []
        // 轉換level到對應的顏色深淺(alpha)
        let levelMapAlpha = []
        for (var i = 100; i > 0; i -= 10) {
            levelMapAlpha.push((i) / 100)
        }
        let convertLevelToAlpha = (level) => {
            level = level < levelMapAlpha.length ? level : levelMapAlpha.length
            return levelMapAlpha[parseInt(level) - 1]
        }

        // 分配顏色給每一個被告
        defendants = this.assignDefendantsColor(defendants)
        // console.log(defendants)

        //
        let self = this
        tokens = tokens.map((token, index) => {
            let mark = marks[index]
            if (mark !== '') {
                mark = mark.split(",")
                let name = mark[0]
                let color = defendants.filter((defendant) => {
                    return name === defendant.name
                })[0].color
                let level = mark[1]
                // 反回帶有高亮的token
                const newRef = React.createRef()
                // console.log('newRef', newRef)
                self.markRefs.push({
                    'name': `${name}-${token}`,
                    'ref': newRef
                })
                return (
                    <mark
                        ref={newRef}
                        style={{
                            backgroundColor: `rgba(${color},${convertLevelToAlpha(level)})`
                        }}
                        key={index}
                        data-tip={name}>{token}</mark>
                )
            }
            var re = new RegExp('[：。]$');
            // 返回一般的token
            if (token.match(re) !== null)
                return <React.Fragment key={index}>{token}<br /></React.Fragment>
            else
                return <React.Fragment key={index}>{token}</React.Fragment>
        })
        return {
            context: tokens,
            defendantsWithColor: defendants
        }
    }

    render() {
        let { defendants, tokens, marks } = this.props
        let { fixedDefendantsCard } = this.state
        let { context = [], defendantsWithColor } = this.highlight(defendants, tokens, marks)
        return (
            <div>
                <div
                    ref={this.DefendantsCardRef}
                    className="container">
                    <DefendantsCard
                        key={fixedDefendantsCard.toString()}
                        self={this}
                        defendantsWithColor={defendantsWithColor} />
                </div>
                {fixedDefendantsCard ?
                    <div className="container">
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            // backgroundColor: 'white',
                            height: INFO_BOARD_HEIGHT.toString() + 'px',
                            overflowX: 'hidden',
                            overflowY: 'visible',
                            backgroundColor:'#f3faf4'
                        }}>
                            <div className="container">
                                <div className="w-100" style={{
                                    backgroundColor: '#363F70',
                                    position: 'absolute',
                                    left: 0,
                                    color: '#FBFCFF',
                                    height: 24,
                                    paddingLeft: 15,
                                }}>
                                    <span>Visualize CJ</span>
                                    <div className="text-center" style={{
                                        marginTop:-24
                                    }}>
                                        <span onClick={()=>{
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            });
                                        }} style={{cursor:'pointer'}}>回到上方</span>
                                    </div>
                                    <span className="float-right" style={{ marginRight: 15,marginTop:-24 }}>{/*UDIC LAB*/}</span>
                                </div>
                                <div>
                                    <br />
                                    <DefendantsCard
                                        key={fixedDefendantsCard.toString()}
                                        self={this} defendantsWithColor={defendantsWithColor} />
                                </div>
                            </div>
                        </div>
                    </div> : null}
                <div>
                    {context}
                </div>
                <ReactTooltip
                    key={JSON.stringify(this.props)}
                    html={true} />
            </div>
        );
    }
}

export default markDocument;
