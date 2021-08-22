var nav = document.createElement('nav');
nav.innerHTML =
`
<table>
<tr>
   <th><a href="/index.html" class="img-link">
      <img src="/resources/icon.png" alt="logo" height="30px" />
      The Rook Platoon</a>
   </th>
</tr>
</table>
<table>
<tr>
   <th><a href="https://discord.gg/FZXrkQXJPm" target="_blank">Discord</a></th>
   <th><a href="https://inara.cz/squadron/8829/" target="_blank">Inara</a></th>
   <th><a href="https://www.edsm.net/en/guilds/summary/id/97/name/Rook+Platoon" target="_blank">EDSM</a></th>
   <th>|</th>
   <th><a href="/news/index.html">News &amp; Updates</a></th>
</tr>
</table>
`
document.body.append(nav);