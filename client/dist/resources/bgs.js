function systemStats(e){fetch(`https://elitebgs.app/api/ebgs/v5/systems?name=${e}`).then((e=>e.json())).then((e=>{for(var t of(console.log(e.docs),e.docs[0].factions))console.log(t.name),fetch(`https://elitebgs.app/api/ebgs/v5/factions?name=${t.name}`).then((e=>e.json())).then((e=>{document.createElement("");for(var t of e.docs[0].faction_presence)t.system_name})).then((e=>e.json()))}))}function factionStats(e){fetch(`https://elitebgs.app/api/ebgs/v5/factions?name=${e}`).then((e=>e.json())).then((e=>{console.log(e.docs)}))}function overallSystemStats(e){fetch(`https://eddbapi.kodeblox.com/api/v4/systems?name=${e}`).then((e=>e.json())).then((e=>{}))}