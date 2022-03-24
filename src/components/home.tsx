import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { AppBar } from './appBar'

import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import medium from '../assets/medium.svg'
import github from '../assets/github.svg'
import solana from '../assets/solana.svg'

import './home.less'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Stream Dex Aggregator'
  })

  const toTg = (e: any) => {
    // e.preventDefault()
    gtag_report_conversion('https://t.me/StreamDaoMasterBot')

    // window.open('https://t.me/StreamDaoMasterBot', 'StreamDaoMasterBot', '_blank')
  }

  return (
    <div className="page-home">
      <AppBar />
      <div className="mod">
        <div className="hd">
          <h1>An innovative cross-chain DeFi aggregator on Solana and more</h1>
        </div>
        <div className="bd" />
        <div className="ft">
          <div className="socials">
            <div className="flex">
              <div className="icon">
                <a href="https://twitter.com/streamprotocol">
                  <img src={twitter} />
                </a>
              </div>
              <div className="icon">
                <a href="https://t.me/streamdaocommunity">
                  <img src={telegram} />
                </a>
              </div>
              <div className="icon">
                <a href="https://medium.com/@StreamProtocol">
                  <img src={medium} />
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/streamdao">
                  <img src={github} />
                </a>
              </div>
            </div>
          </div>
          <div className="powerby">
            Built on: <img src={solana} />
            <a href="https://solana.com">Solana</a>
          </div>
          <div className="buttons">
            <div className="flex btn-flex">
              <a href="https://t.me/StreamDaoMasterBot" onClick={toTg}>
                <Button
                  className="custom-btn purple-btn"
                  type="text"
                  size="large"
                >
                  🎁 Genesis Airdrop
                </Button>
              </a>
              <a
                className="lightpaper"
                href="https://"
              >
                <Button
                  className="custom-btn purple-btn-outline"
                  type="text"
                  size="large"
                >
                  Download LightPaper
                </Button>
              </a>
              <Link to={{ pathname: '/trade' }}>
                <Button
                  className="custom-btn purple-btn-outline"
                  type="text"
                  size="large"
                >
                  Trade
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
