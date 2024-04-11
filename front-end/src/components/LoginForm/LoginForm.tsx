"use client"

import { Box, Button, IconButton, Tab, Tabs, TextField } from "@mui/material"
import styles from "./login.module.css"
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Lock from "@mui/icons-material/Lock"
import { useState } from "react"
import { VisibilityOff, Visibility } from "@mui/icons-material"

export default function LoginForm() {

  const [tab, setTab] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent<Element, Event>, newValue: number) => {
    setTab(newValue)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <main className={styles.main}>
      <h2>MiniChat</h2>
      <form className={styles.form}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Entrar" {...a11yProps(0)} />
          <Tab label="Registrar" {...a11yProps(1)} />
          <Tab label="Redefinir senha" {...a11yProps(2)} />
        </Tabs>
        <Box sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
          <TextField sx={{
            m: 1,
            width: "300px",
          }}
            InputProps={{
              required: true,
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            label="Usuário" />
          { (tab == 1 || tab == 0) && <TextField sx={{
            m: 1,
            width: "300px",
          }}
            InputProps={{
              required: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              type:(showPassword ? 'text' : 'password'),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )

            }}
            label="Senha" type="password" />}
          {tab == 1 && <TextField sx={{
            m: 1,
            width: "300px",
          }}
            InputProps={{
              required: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),

            }}
            label="Confirmação senha" type="password" />}
          <Box sx={{
            w: '300px',
            mt: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button type='submit' variant="contained">
              {tab === 0 && 'Entrar'}
              {tab === 1 && 'Registrar'}
              {tab === 2 && 'Redefinir senha'}
            </Button>
          </Box>
        </Box>
      </form>
    </main>
  )
}
