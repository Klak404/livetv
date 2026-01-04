// Απλό παράδειγμα που κρατάει το κανάλι στη μνήμη (για όσο το function είναι ενεργό)
let currentChannel = {
  currentSource: "https://alphatvlive2.siliconweb.com/alphatvlive/live_abr/playlist.m3u8",
  type: "hls"
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Εδώ το τηλεκοντρόλ στέλνει το νέο κανάλι
    currentChannel = req.body;
    return res.status(200).json({ message: "Updated", data: currentChannel });
  } else {
    // Εδώ η σελίδα (player) διαβάζει το τρέχον κανάλι
    return res.status(200).json(currentChannel);
  }
}
