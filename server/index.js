const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, 'client/dist')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});



app.get('/api/routes', (req, res) => {
  res.json([
    {
      "uuid": "1",
      "address": "192.168.1.0",
      "mask": "24",
      "gateway": "192.168.1.1",
      "interface": "eth0"
    },
    {
      "uuid": "2",
      "address": "10.0.0.0",
      "mask": "8",
      "gateway": "10.0.0.1",
      "interface": "eth1"
    },
    {
      "uuid": "3",
      "address": "172.16.0.0",
      "mask": "12",
      "gateway": "172.16.0.1",
      "interface": "eth2"
    },
    {
      "uuid": "4",
      "address": "192.168.2.0",
      "mask": "24",
      "gateway": "192.168.2.1",
      "interface": "wlan0"
    },
    {
      "uuid": "5",
      "address": "192.168.3.0",
      "mask": "24",
      "gateway": "192.168.3.1",
      "interface": "eth0"
    },
    {
      "uuid": "6",
      "address": "10.1.0.0",
      "mask": "16",
      "gateway": "10.1.0.1",
      "interface": "eth1"
    },
    {
      "uuid": "7",
      "address": "172.17.0.0",
      "mask": "16",
      "gateway": "172.17.0.1",
      "interface": "wlan0"
    },
    {
      "uuid": "8",
      "address": "192.168.4.0",
      "mask": "24",
      "gateway": "192.168.4.1",
      "interface": "eth2"
    },
    {
      "uuid": "9",
      "address": "0.0.0.0",
      "mask": "0",
      "gateway": "192.168.1.254",
      "interface": "eth0"
    }
  ]
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
