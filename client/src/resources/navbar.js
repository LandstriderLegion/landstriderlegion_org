var nav = document.createElement('nav');
nav.innerHTML = `
<table>
<tr>
   <th><a href="/index.html" class="img-link">
      <img src="/resources/icon.png" alt="logo" height="30px" />
      Landstrider Legion</a>
   </th>
</tr>
</table>
<table>
<tr>
   <th><a href="/links/redirect.html?q=discord" target="_blank">Discord</a></th>
   <th><a href="/links/redirect.html?q=inara" target="_blank">Inara</a></th>
   <th>|</th>
   <th><a href="/news/index.html">News &amp; Updates</a></th>
   <th><a href="/events/index.html">Events</a></th>
</tr>
</table>`
document.body.append(nav);

// <th><a href="#" target="_blank">EDSM</a></th>