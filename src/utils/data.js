export const BASE_URL = "http://localhost:8611";

export default function fetchResourceAndSetState(url, setState) {
    fetch(url, {
        mode: 'cors'
    })
      .then(resp => resp.json())
      .then(resp => setState(resp.list));
}