import Link from 'next/link'
import React from 'react'
import cl from  "./Setting.module.css"


function SettingsList() {
  console.log(process.cwd())
  return (
      <section className={cl.allsettings}>
          <div className={cl.user}><Link href="/SettingsPage/UserSettings">Users Settings ... </Link></div>
    </section>
  )
}

export default SettingsList