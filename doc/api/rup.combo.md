<a name="module_rup_combo"></a>

## rup_combo
Permite al usuario recuperar un elemento de una gran lista de elementos o de varias listas dependientes de forma sencilla y ocupando poco espacio en la interfaz.

**Summary**: Componente RUP Combo.  
**Example**  
```js
$("#idCombo").rup_combo({	source : "comboSimple/remote",	sourceParam : {label:"desc"+$.rup_utils.capitalizedLang(), value:"code", style:"css"}});
```

* [rup_combo](#module_rup_combo)
    * [~defaults](#module_rup_combo..defaults)
    * [~getRupValue()](#module_rup_combo..getRupValue) ⇒ <code>string</code> &#124; <code>number</code>
    * [~setRupValue(param)](#module_rup_combo..setRupValue)
    * [~clear()](#module_rup_combo..clear)
    * [~reset()](#module_rup_combo..reset)
    * [~checkAll()](#module_rup_combo..checkAll)
    * [~select(param)](#module_rup_combo..select)
    * [~selectLabel(param)](#module_rup_combo..selectLabel)
    * [~value()](#module_rup_combo..value) ⇒ <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [~label()](#module_rup_combo..label) ⇒ <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
    * [~index()](#module_rup_combo..index) ⇒ <code>number</code> &#124; <code>Array.&lt;number&gt;</code>
    * [~disable()](#module_rup_combo..disable)
    * [~enable()](#module_rup_combo..enable)
    * [~isDisabled()](#module_rup_combo..isDisabled)
    * [~disableChild()](#module_rup_combo..disableChild)
    * [~disableOpt(optValue)](#module_rup_combo..disableOpt)
    * [~disableOptArr(optValueArr)](#module_rup_combo..disableOptArr)
    * [~enableOpt(enableOpt)](#module_rup_combo..enableOpt)
    * [~enableOptArr(optValueArr)](#module_rup_combo..enableOptArr)
    * [~refresh()](#module_rup_combo..refresh)
    * [~reload()](#module_rup_combo..reload)
    * [~order(orderedByValue, orderAsNumber, skipFirst)](#module_rup_combo..order)

<a name="module_rup_combo..defaults"></a>

### rup_combo~defaults
Opciones por defecto de configuración del componente.

**Kind**: inner property of <code>[rup_combo](#module_rup_combo)</code>  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| onLoadError | <code>[onLoadError](#jQuery.rup_combo..onLoadError)</code> |  | Función de callback a ejecutar en caso de que se produzca un error en la petición de obtención de la lista de elementos a mostrar. |
| width | <code>number</code> | <code>200</code> | Determina el tamaño del combo. Su valor por defecto es 200 para la selección simple. En el caso de selección múltiple su declaración es obligatoria. |
| blank | <code>string</code> | <code>null</code> | Se utiliza para declarar un valor independiente de la lógica del negocio. En ocasiones se representa como “Seleccione un elemento. |
| style | <code>string</code> | <code>&quot;dropdown&quot;</code> | Tipo de visualización de la lista de opciones del combo. |
| showValue | <code>boolean</code> | <code>false</code> | Determina si el combo debe mostrar el valor asociado concatenado al literal (sólo selección simple). |
| token | <code>string</code> | <code>&quot;\&quot;|\&quot;&quot;</code> | Define el separador a utilizar cuando se muestra el valor asociado al combo concatenado al literal. |
| multiValueToken | <code>string</code> | <code>&quot;\&quot;##\&quot;&quot;</code> | Define el separador a utilizar en combos enlazados locales. |
| ordered | <code>boolean</code> | <code>true</code> | Indica si el combo debe ordenarse. |
| orderedByValue | <code>boolean</code> | <code>false</code> | Indica si el la ordenación del combo debe realizarse por el valor de los elementos en lugar de por el texto. |
| onLoadSuccess | <code>[onLoadSuccess](#jQuery.rup_combo..onLoadSuccess)</code> | <code></code> | Función de callback a ejecutar en el caso de que la petición de carga de datos se haya producido correctamente. |
| loadFromSelect | <code>boolean</code> | <code>false</code> | Determina si se debe de utilizar los elementos option del elemento html sobre el que se inicializa el componente para inicializar los datos del elemento. |
| multiselect | <code>boolean</code> | <code>false</code> | Indica si el combo permite la selección múltiple. |
| multiOptgroupIconText | <code>boolean</code> | <code>false</code> | Indica si se desea que en la selección múltiple con grupos, el nombre del grupo tenga descripción en los iconos para seleccionar/deseleccionar los elementos del grupo. |
| submitAsString | <code>boolean</code> | <code>false</code> | Indica si el envío de los elementos seleccionados en la selección múltiple se realiza como un literal separados por coma. |
| submitAsJSON | <code>boolean</code> | <code>false</code> | Indica si el envío de los elementos seleccionados en la selección múltiple se realiza como un array JSON donde el nombre del mapa será el nombre del combo. En el caso de que el nombre contenga notación dot se tomará el último literal. Ej: [{id:1}, {id:2}, …]. |
| readAsString | <code>boolean</code> | <code>false</code> | Determina si la asignación de un valor inicial se va a realizar a partir de un string con los ids de los elementos separados por comas en vez de un array de json. |
| rowStriping | <code>boolean</code> | <code>false</code> | Indica si se debe aplicar un estilo diferente a las filas pares e impares para poder distinguirlas mediante un color diferente. |
| typeAhead | <code>number</code> | <code>false</code> | Especifica en milisegundos el tiempo de espera que toma el componente antes de procesar los eventos de escritura realizados por el usuario. |
| legacyWrapMode | <code>number</code> | <code>false</code> | Determina si se emplea el método obsoleto a la hora de empaquetar en objetos json los elementos seleccionados. Su propósito es mantener la retrocompatibilidad. |

<a name="module_rup_combo..getRupValue"></a>

### rup_combo~getRupValue() ⇒ <code>string</code> &#124; <code>number</code>
Método utilizado para obtener el valor del componente. Este método es el utilizado por el resto de componentes RUP para estandarizar la obtención del valor del Combo.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Returns**: <code>string</code> &#124; <code>number</code> - - Devuelve el valor actual del componente seleccionado por el usuario.  
**Example**  
```js
$("#idCombo").rup_combo("getRupValue");
```
<a name="module_rup_combo..setRupValue"></a>

### rup_combo~setRupValue(param)
Método utilizado para asignar el valor al componente. Este método es el utilizado por
el resto de componentes RUP para estandarizar la asignación del valor al Combo.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>string</code> &#124; <code>number</code> | Valor que se va a asignar al componente. |

**Example**  
```js
$("#idCombo").rup_combo("setRupValue", "Si");
```
<a name="module_rup_combo..clear"></a>

### rup_combo~clear()
Método que limpia el valor seleccionado en el combo. En el caso de selección múltiple los valores seleccionados.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("clear");
```
<a name="module_rup_combo..reset"></a>

### rup_combo~reset()
Realiza una reinicizalización del estado del componente.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("reset");
```
<a name="module_rup_combo..checkAll"></a>

### rup_combo~checkAll()
Selecciona todos los elementos en el caso de tratarse de un combo multilesección.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("checkAll");
```
<a name="module_rup_combo..select"></a>

### rup_combo~select(param)
Selecciona el elemento enviado como parámetro. En caso de ser un numérico se selecciona por la posición (comenzando en 0) y si es un literal se selecciona por el valor. En el caso de selección múltiple el parámetro será un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>string</code> &#124; <code>number</code> &#124; <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;number&gt;</code> | Parámetro utilzado para determinar los elementos a seleccionar. |

**Example**  
```js
// Simple$("#idCombo").rup_combo("select", 2);// Multiple$("#idCombo").rup_combo("select", [0,2]);
```
<a name="module_rup_combo..selectLabel"></a>

### rup_combo~selectLabel(param)
Selecciona el elemento del combo que contiene como texto el indicado. En caso de no existir el texto a buscar el combo no sufrirá cambios En el caso de selección múltiple el parámetro será un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | Parámetro utilzado para determinar los elementos a seleccionar. |

**Example**  
```js
// Simple$("#idCombo").rup_combo("selectLabel", "No");// Multiple$("#idCombo").rup_combo("selectLabel", ["No","Si"]);
```
<a name="module_rup_combo..value"></a>

### rup_combo~value() ⇒ <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
Método que devuelve el valor seleccionado en el combo. En caso de ser el valor vació, o sin selección, el valor devuelto es el asociado al “blank”. En el caso de la selección múltiple se devolverá un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Returns**: <code>string</code> &#124; <code>Array.&lt;string&gt;</code> - - Valor del elemento o elementos seleccionados.  
**Example**  
```js
$("#idCombo").rup_combo("value");
```
<a name="module_rup_combo..label"></a>

### rup_combo~label() ⇒ <code>string</code> &#124; <code>Array.&lt;string&gt;</code>
Método que devuelve el label asociado al valor seleccionado en el combo. En el caso de la selección múltiple se devolverá un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Returns**: <code>string</code> &#124; <code>Array.&lt;string&gt;</code> - - Texto del elemento o elementos seleccionado.  
**Example**  
```js
$("#idCombo").rup_combo("label");
```
<a name="module_rup_combo..index"></a>

### rup_combo~index() ⇒ <code>number</code> &#124; <code>Array.&lt;number&gt;</code>
Devuelve el índice de la opción seleccionada en el combo (empezando en 0). En el caso de la selección múltiple se devolverá un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Returns**: <code>number</code> &#124; <code>Array.&lt;number&gt;</code> - - Índice del elemento o elementos seleccionados.  
**Example**  
```js
$("#idCombo").rup_combo("index");
```
<a name="module_rup_combo..disable"></a>

### rup_combo~disable()
Deshabilita el combo.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("disable");
```
<a name="module_rup_combo..enable"></a>

### rup_combo~enable()
Habilita el combo.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("enable");
```
<a name="module_rup_combo..isDisabled"></a>

### rup_combo~isDisabled()
Indica si el combo está deshabilitado o no.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Type | Description |
| --- | --- |
| <code>boolean</code> | Devuelve si el combo está deshabilitado o no. |

**Example**  
```js
$("#idCombo").rup_combo("isDisabled");
```
<a name="module_rup_combo..disableChild"></a>

### rup_combo~disableChild()
Vacía y deshabilita el combo sobre el que se aplica así como todos los combos que depende de él. Su uso principalmente es interno para las peticiones remotas.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("disableChild");
```
<a name="module_rup_combo..disableOpt"></a>

### rup_combo~disableOpt(optValue)
Deshabilita una opción de un combo multiselección.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| optValue | <code>string</code> | Value del option que queremos deshabilitar. |

**Example**  
```js
$("#idCombo").rup_combo("disableOpt", "opt1");
```
<a name="module_rup_combo..disableOptArr"></a>

### rup_combo~disableOptArr(optValueArr)
Deshabilita varias opciones del combo. Las opciones se identifican mediante un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| optValueArr | <code>Array.&lt;string&gt;</code> | Array en el que se indican los values de las opciones a deshabilitar. |

**Example**  
```js
$("#idCombo").rup_combo("disableOptArr", ["opt1","opt2"]);
```
<a name="module_rup_combo..enableOpt"></a>

### rup_combo~enableOpt(enableOpt)
Habilita una opción de un combo multiselección.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| enableOpt | <code>string</code> | Value del option que queremos habilitar. |

**Example**  
```js
$("#idCombo").rup_combo("enableOpt", "opt1");
```
<a name="module_rup_combo..enableOptArr"></a>

### rup_combo~enableOptArr(optValueArr)
Habilita varias opciones del combo. Las opciones se identifican mediante un array.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| optValueArr | <code>Array.&lt;string&gt;</code> | Array en el que se indican los values de las opciones a habilitar. |

**Example**  
```js
$("#idCombo").rup_combo("enableOptArr", ["opt1","opt2"]);
```
<a name="module_rup_combo..refresh"></a>

### rup_combo~refresh()
Refresca los valores asociados al combo.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("refresh");
```
<a name="module_rup_combo..reload"></a>

### rup_combo~reload()
Realiza una recarga de los combos.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  
**Example**  
```js
$("#idCombo").rup_combo("reload");
```
<a name="module_rup_combo..order"></a>

### rup_combo~order(orderedByValue, orderAsNumber, skipFirst)
Ordena alfanumericamente y en orden ascendente el combo sobre el que se aplica. Se invoca por defecto al cargarse los combos a no se que se cambie el valor del atributo ordered en la creación.

**Kind**: inner method of <code>[rup_combo](#module_rup_combo)</code>  

| Param | Type | Description |
| --- | --- | --- |
| orderedByValue | <code>boolean</code> | Indica si la búsqueda es por texto (por defecto) o si la búsqueda es por el valor. |
| orderAsNumber | <code>boolean</code> | Indica si se debe den de ordenar como valores numéricos en vez de alfabéticos. |
| skipFirst | <code>boolean</code> | Determina si se debe de obviar el primer elemento. |

**Example**  
```js
$("#idCombo").rup_combo("reload");
```
