import { Layout, Divider, Row, Col, Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, ConnectButton, CryptoLogos } from 'web3uikit'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { Moralis } from 'moralis'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

async function updateBalances(account, setNative, setVault) {
  let provider = ethers.getDefaultProvider();
  let nativeBalance = await provider.getBalance(account);
  nativeBalance = ethers.utils.formatEther(nativeBalance)
  try {
    const web3Provider = await Moralis.enableWeb3();
  } catch (e) {
    return;
  }
  //let abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
  //let contract = new ethers.Contract('0xdAC17F958D2ee523a2206206994597C13D831ec7', abi, provider);
  //const options = {value: ethers.utils.parseEther("1.0")}
  //let vaultBalance = await contract.balanceOf("0x3355d6E71585d4e619f4dB4C7c5Bfe549b278299", options);
  let vaultBalance = -1;
  setNative(nativeBalance);
  setVault(vaultBalance);
}

export default function Home() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const { data, error, runContractFunction, isFetching, isLoading, } = useWeb3Contract();
  const [nativeBalance, setNative] = useState(0);
  const [vaultBalance, setVault] = useState(0);
  const [depositValue, setDepositVault] = useState(0);
  useEffect(() => {
    updateBalances(account, setNative, setVault);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sidenav}>
        <Row>
          <Col>
            <h1 className={styles.logo}>ARB</h1>
            <ConnectButton className={styles.addressview} />
          </Col>
          <Divider style={{ margin: "10px" }}></Divider>
          <Col>
            <Button
              theme='outline'
              id='infobutton'
              onClick={() => location.href = 'https://google.com'}
              text='Read More'
              type='button'
              icon="externalLink"
              className={styles.buttoner}
            />
          </Col>
        </Row>
      </div>
      <main className={styles.main}>
        <div className={styles.module}>
          <h1 className={styles.text}>Market Make like the Pros</h1>
          <h2 className={styles.text}>Your Home for Trading Power Perpetuals</h2>

          <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
            <section style={{ display: 'flex', gap: '20px' }}>
              <div style={{ borderRadius: '25px', backgroundColor: "red", textAlign: "center", width: "100%" }}>
                <h2>{account}</h2>
                <p>Eggplant Parm</p>
                <div style={{ borderRadius: '25px', backgroundColor: "green" }}>
                  <h2>a</h2>
                  <h3>e</h3>
                </div>
                <div style={{ borderRadius: '25px', backgroundColor: "orange" }}>
                  <p>Available: {nativeBalance} ETH.</p>
                  <Input id="deposit-input"
                  defaultValue='0.0'
                  placeholder='0.0'
                  onChange={(e) => {setDepositValue(e.target.value)}}
                  />
                  <Button
                    theme='outline'
                    id='infobutton'
                    onClick={async () => {
                      const web3Provider = await Moralis.enableWeb3();
                      let provider = ethers.getDefaultProvider("ropsten");
                      let abi = [
                        {
                          "inputs": [],
                          "stateMutability": "payable",
                          "type": "constructor"
                        },
                        {
                          "inputs": [],
                          "name": "deposit",
                          "outputs": [],
                          "stateMutability": "payable",
                          "type": "function"
                        },
                        {
                          "inputs": [],
                          "name": "notPayable",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                        },
                        {
                          "inputs": [],
                          "name": "owner",
                          "outputs": [
                            {
                              "internalType": "address payable",
                              "name": "",
                              "type": "address"
                            }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                        },
                        {
                          "inputs": [
                            {
                              "internalType": "address payable",
                              "name": "_to",
                              "type": "address"
                            },
                            {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                            }
                          ],
                          "name": "transfer",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                        },
                        {
                          "inputs": [],
                          "name": "withdraw",
                          "outputs": [],
                          "stateMutability": "nonpayable",
                          "type": "function"
                        }
                      ]
                      const signer = web3Provider.getSigner();
                      let contract = new ethers.Contract('0xdc79751157820f15adb8bc69a712e3ef1a4c6494', abi, signer);
                      const options = { value: ethers.utils.parseEther(depositValue) }
                      let currentValue = await contract.deposit(options);

                      console.log(currentValue);
                    }}
                    text='Deposit'
                    type='button'
                    icon="triangleUp"
                    className={styles.buttoner}
                    disabled={account == null}
                  />
                  <p>Available: {vaultBalance} ETH.</p>
                  <Input id="withdrawal-input" />
                  <Button
                    theme='outline'
                    id='infobutton'
                    onClick={() => {
                      updateBalances(account, setNative, setVault);

                    }}
                    text='withdrawal'
                    type='button'
                    icon="triangleDown"
                    className={styles.buttoner}
                    disabled={account == null}
                  />
                </div>
                <div style={{ borderRadius: '25px', backgroundColor: "green" }}>
                  <h2>a</h2>
                  <h3>e</h3>
                </div>
              </div>
            </section>
            <section style={{ display: 'flex', gap: '20px' }}>
              <div style={{ borderRadius: '25px', backgroundColor: "red", width: "50%" }}>
                <h2>Eggplant Parm</h2>
                <h3>Eggplant Parm</h3>
              </div>
              <div style={{ borderRadius: '25px', backgroundColor: "red", width: "50%" }}>
                <h2>Eggplant Parm</h2>
                <h3>Eggplant Parm</h3>
              </div>
            </section>
          </div>
        </div>
        ah
      </main>
    </div>
  );
}

/*export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ConnectButton />
        <p className={styles.description}>
          Get started by editing {account}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )*/

