function systemStats(systemName) {
   fetch(`https://elitebgs.app/api/ebgs/v5/systems?name=${systemName}`)
   .then(response => {
      return response.json()
   })
   .then(json => {
      console.log(json.docs)
      for(var faction of json.docs[0].factions) {
         console.log(faction.name)
         fetch(`https://elitebgs.app/api/ebgs/v5/factions?name=${faction.name}`)
         .then(response => {
            return response.json()
         })
         .then(json => {
            var cont = document.createElement('')
            for(var system of json.docs[0].faction_presence) {
               if(system.system_name == systemName) {

               }
            }
         })
   .then(response => {
      return response.json()
   })
      }
   })
}

function factionStats(factionName) {
   fetch(`https://elitebgs.app/api/ebgs/v5/factions?name=${factionName}`)
   .then(response => {
      return response.json()
   })
   .then(json => {
      console.log(json.docs)
   })
}

function overallSystemStats(systemName) {
   fetch(`https://eddbapi.kodeblox.com/api/v4/systems?name=${systemName}`)
   .then(response => {
      return response.json()
   })
   .then(json => {
      
   })
}