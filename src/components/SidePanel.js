"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import StatusSidePanle from './status/StatusSidePanle';
import ArchiveSidePanel from './archive/ArchiveSidePanel';
import SettingSidePanel from './settings/SettingSidePanel';
import ChatSidePanel from './chats/ChatSidePanel';

const SidePanel = () => {
    const path = usePathname();
    
    
    if (path === '/chats/status') {
        return <StatusSidePanle/>
    }else if(path === '/chats/archive'){
      return <ArchiveSidePanel/>
    }else if(path === '/chats/settings'){
      return <SettingSidePanel/>
    }else {
      return <ChatSidePanel/>
    }
 
  
}

export default SidePanel
