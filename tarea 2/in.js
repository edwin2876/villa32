function agregarTarea() {
    const input = document.getElementById('tareaInput');
    const tareaTexto = input.value.trim();

    if (tareaTexto === "") return;

    const li = document.createElement('li');
    li.textContent = tareaTexto;

    li.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    const acciones = document.createElement('div');
    acciones.className = 'actions';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = function () {
      li.remove();
    };

    acciones.appendChild(btnEliminar);
    li.appendChild(acciones);

    document.getElementById('listaTareas').appendChild(li);
    input.value = "";
}
function guardarTareas() {
    const tareas = document.getElementById('listaTareas').innerHTML;
    localStorage.setItem('tareas', tareas);
}
  
function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      document.getElementById('listaTareas').innerHTML = tareasGuardadas;
      // Reasignar los eventos (opcional)
    }
}
  
  window.onload = cargarTareas;


    // Cargar tareas al iniciar la página
    window.onload = function () {
      cargarTareas();
    };
  
    function agregarTarea() {
      const input = document.getElementById("tareaInput");
      const texto = input.value.trim();
  
      if (texto === "") return;
  
      const tareas = obtenerTareasGuardadas();
      tareas.push(texto);
      guardarTareas(tareas);
      mostrarTareas();
  
      input.value = ""; // limpiar input
    }
  
    function mostrarTareas() {
      const lista = document.getElementById("listaTareas");
      lista.innerHTML = ""; // limpiar lista
  
      const tareas = obtenerTareasGuardadas();
      tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea;
  
        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function () {
          eliminarTarea(index);
        };
  
        li.appendChild(btnEliminar);
        lista.appendChild(li);
      });
    }
  
    function eliminarTarea(index) {
      const tareas = obtenerTareasGuardadas();
      tareas.splice(index, 1);
      guardarTareas(tareas);
      mostrarTareas();
    }
  
    function obtenerTareasGuardadas() {
      const tareasGuardadas = localStorage.getItem("tareas");
      return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    }
  
    function guardarTareas(tareas) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
    }
  
    function cargarTareas() {
      mostrarTareas();
    }