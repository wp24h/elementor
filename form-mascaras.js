/*

Para usar máscaras no WordPress como um todo, você pode usar plugins ou pode usar um plugin de máscara.
Nesse caso, vamos ver como usar o plugin jQuery Mask Plugin.

Aqui está o link do plugin:
https://github.com/igorescobar/jQuery-Mask-Plugin

Aqui está links da biblioteca em CDNJS:
https://cdnjs.com/libraries/jquery.mask

Aqui está o passo a passo:

1) Crie um Custom Code no Elementor e adicione a biblioteca
2) Crie um Custom Code e adicione o script abaixo

Notas: 

Você pode usar os Códigos/Scripts usando Conditions do Elementor

O Script abaixo define uma função usando a variável "behavior" para verificar a quantidade de digitos a medida que são digitados (usamos onKeyPress).

Abaixo passamos também o id (form-field-whatsapp) que é a junção do padrão (prefixo) do Elementor "form-field-" com o ID da guia Advanced do campo, nesse caso "whatsapp".

*/

<script type="text/javascript">

	(function( $ ) {
		
		var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		options = {
				onKeyPress: function (val, e, field, options) {
						field.mask(behavior.apply({}, arguments), options);
				}
		};
    
    //substitua o "whatsapp" pelo ID do campo (field) no formulário do elementor
		$('#form-field-whatsapp').mask(behavior, options);
	
	})( jQuery );

</script>
