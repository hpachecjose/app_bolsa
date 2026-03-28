
  // Carrega exchanges.xml e popula a tabela
  fetch('./exchanges.xml')
    .then(res => res.text())
    .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
    .then(xml => {
      const nodes = xml.getElementsByTagName('exchange');
      const tbody = document.getElementById('tabelaExchanges');
      const badgeTotal = document.getElementById('totalExchanges');

      tbody.innerHTML = '';

      const exchanges = [];

      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];

        const obj = {
          id: el.getAttribute('id'),
          mic: el.getAttribute('mic'),
          country: el.getAttribute('country'),
          city: el.getAttribute('city'),
          marketCapTrillion: parseFloat(el.getAttribute('marketCapTrillion')),
          listedCompanies: parseInt(el.getAttribute('listedCompanies')),
          dailyVolumeBillion: parseFloat(el.getAttribute('dailyVolumeBillion')),
        };

        exchanges.push(obj);

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${obj.id}</td>
          <td>${obj.mic}</td>
          <td>${obj.country}</td>
          <td>${obj.city}</td>
          <td>${obj.marketCapTrillion.toFixed(1)}</td>
          <td>${obj.listedCompanies}</td>
          <td>${obj.dailyVolumeBillion.toFixed(1)}</td>
        `;
        tbody.appendChild(tr);
      }

      badgeTotal.textContent = exchanges.length + ' mercados';
    })
    .catch(err => {
      console.error('Erro ao carregar exchanges.xml', err);
      const tbody = document.getElementById('tabelaExchanges');
      if (tbody) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="text-center text-danger">
              Erro ao carregar exchanges.xml
            </td>
          </tr>
        `;
      }
    });

