// configuración del botón de pago
import React from "react";

import { initMercadoPago, Wallet} from '@mercadopago/sdk-react';

initMercadoPago('APP_USR-6827416e-2dc3-46fd-817e-b356054c6721');

const App = () => {
return(
<div>
<h1>boton de pago</h1>
<p>haz clic en el boton para haacer el pago :V</p>

<Wallet initialization={{ preferenceId: "3492527229-a7ddb05e-0272-4093-8da2-502575d6c2f9" }} />
</div>
);
};
export default App;