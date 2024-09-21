function calcularMRU() {
    const v = parseFloat(document.getElementById('mru_v').value);
    const t = parseFloat(document.getElementById('mru_t').value);
    if (!isNaN(v) && !isNaN(t)) {
        const s = v * t; // Fórmula: s = vt
        document.getElementById('mru_result').innerText = `Distancia (s) = ${s.toFixed(2)} m`;
    } else {
        document.getElementById('mru_result').innerText = 'Por favor ingrese valores válidos.';
    }
}

function calcularVelocidad() {
    const s = parseFloat(document.getElementById('mru_v2').value);
    const t = parseFloat(document.getElementById('mru_t2').value);
    if (!isNaN(s) && !isNaN(t) && t !== 0) {
        const v = s / t; // Fórmula: v = s/t
        document.getElementById('mru_v_result').innerText = `Velocidad (v) = ${v.toFixed(2)} m/s`;
    } else {
        document.getElementById('mru_v_result').innerText = 'Por favor ingrese valores válidos.';
    }
}

function calcularTiempo() {
    const s = parseFloat(document.getElementById('mru_s').value);
    const v = parseFloat(document.getElementById('mru_v3').value);
    if (!isNaN(s) && !isNaN(v) && v !== 0) {
        const t = s / v; // Fórmula: t = s/v
        document.getElementById('mru_t_result').innerText = `Tiempo (t) = ${t.toFixed(2)} s`;
    } else {
        document.getElementById('mru_t_result').innerText = 'Por favor ingrese valores válidos.';
    }
}

function calcularMRUV() {
    const v0 = parseFloat(document.getElementById('mruv_v0').value);
    const a = parseFloat(document.getElementById('mruv_a').value);
    const t = parseFloat(document.getElementById('mruv_t').value);
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const s = v0 * t + 0.5 * a * t * t; // Fórmula: s = v0*t + (1/2)*a*t^2
        document.getElementById('mruv_result').innerText = `Distancia (s) = ${s.toFixed(2)} m`;
    } else {
        document.getElementById('mruv_result').innerText = 'Por favor ingrese valores válidos.';
    }
}

function calcularVelocidadFinal() {
    const v0 = parseFloat(document.getElementById('mruv_v0_2').value);
    const a = parseFloat(document.getElementById('mruv_a_2').value);
    const t = parseFloat(document.getElementById('mruv_t_2').value);
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const v = v0 + a * t; // Fórmula: v = v0 + at
        document.getElementById('mruv_v_result').innerText = `Velocidad Final (v) = ${v.toFixed(2)} m/s`;
    } else {
        document.getElementById('mruv_v_result').innerText = 'Por favor ingrese valores válidos.';
    }
}

function calcularDistancia() {
    const v0 = parseFloat(document.getElementById('mruv_v0_3').value);
    const a = parseFloat(document.getElementById('mruv_a_3').value);
    const s = parseFloat(document.getElementById('mruv_s').value);
    if (!isNaN(v0) && !isNaN(a) && !isNaN(s)) {
        const v_final = Math.sqrt(v0 * v0 + 2 * a * s); // Fórmula: v² = v0² + 2as
        document.getElementById('mruv_s_result').innerText = `Velocidad Final (v) = ${v_final.toFixed(2)} m/s`;
    } else {
        document.getElementById('mruv_s_result').innerText = 'Por favor ingrese valores válidos.';
    }
}
