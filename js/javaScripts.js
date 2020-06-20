// Nut Scroll to Stop
$(document).ready(function(e) {
	 $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollup').fadeIn();
		} else {
			$('#scrollup').fadeOut();
		}
		}); 

	$('#scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 });
		return false;
	});
});
// Thanh search tren trang chu
function suggestProduct(obj) {
	var product = ["MAX&CO - Khăn choàng Double Sided","MUJOSH - Kính mát tròn khuyết cạnh Avant Garde","MUJOSH - Kính mát thông minh chống nắng tối ưu","TED BAKER - Túi đựng dụng cụ trang điểm Eulali","TED BAKER - Ốp lưng điện thoại iphone XR Abbieey","TED BAKER - Ốp lưng điện thoại iphone 6,7,8 Plus","MUJOSH - Kính mát thông minh chống nắng tối ưu","MUJOSH - Kính mát đa giác thời thượng","PUMA","Aojo - Kính mát bé gái hình con voi dễ thương","MUJOSH - Kính mát đa giác bo tròn thời trang","DSQUARED2 - Nón bóng chày Dsquared2 1964","DSQUARED2 - Nón nam thêu cá tính Logo Patch","DSQUARED2","Nón nam thêu cá tính Canada Plate","Leather and House Check High-top Sneakers","Leather, Vintage Check Cotton and Suede Tor Boots","Men's Disney x Gucci Rhyton","Men's Rhyton Gucci Worldwide","Women's Gucci Tennis 1977","Air Jordan 1 Mid SE","Air Jordan XXXIII","Nike Air Max 97","VANS CHECKERBOARD SLIP-ON CLASSIC BLACKWHITE","VANS OLD SKOOL CLASSIC BLACKWHITE","Chuck Taylor All Star Chuck Taylor Cheerful Hi Top","Chuck Taylor All Star Twisted Classic Logo Play Hi","Monogram Print E-canvas Arthur","Ultraboost SandL Star Wars","Giay UltraBoost MTL","Flight by VietMax","Ivory Black","LEBY LEMINO - Túi Sách Nữ","PEDRO - Hiệu ứng trong suốt","Woven Zip Around Wallet","Snake Print Woven Shoulder Bag","Glitter Top Handle Envelope Bag","Angular Flap Shoulder Bag","Túi Angular Flap Metallic Top Handle" ,"Túi Small Two-Tone Sculptural" ,"Túi Metal Top Handle Long Wallet" ,"Túi Woven Shoulder ","Túi Small Chunky Chain Strap ","Túi Grommet Strap Tote" ,"Túi Curved Tote","Túi Double Top Handle Tote","Túi Textured Crossbody","Túi Leather Saddle Bag","Túi Triangle Handle Tote Bag","Túi Metallic Accent Mini Wallet","Túi Pleated Drawstring Bag","Túi Textured Zip Around Wallet"

];
	var v = obj.value;
	var ul = document.getElementById("suggestProductId");
	ul.innerHTML = "";
	for (i = 0; i < product.length; i++)
		if (product[i].indexOf(v) > 0 ) {
			var li = "<li onClick='fillText(this)'>" + product[i] + "</li>"; 
			
			ul.innerHTML += li;
		}
	

}

// zoom hình to lên trong sản phẩm
 function zoom(e) {
		    var zoomer = e.currentTarget;
		    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
		    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
		    x = (offsetX / zoomer.offsetWidth) * 100
		    y = (offsetY / zoomer.offsetHeight) * 100
		    zoomer.style.backgroundPosition = x + "% " + y + "%";
		  }