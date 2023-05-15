let shopVisits = 0;
let totalPurchase = 0;
let giftVoucher = 0;

function visitShop() {
	shopVisits++;
	updateVisitorInformation();
}

function makePurchase() {
	const purchaseAmount = parseFloat(prompt("Enter the purchase amount:"));

	if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
		alert("Invalid purchase amount. Please enter a valid number.");
		return;
	}

	totalPurchase += purchaseAmount;
	updateVisitorInformation();
	checkGiftVoucherEligibility();
}

function redeemGiftVoucher() {
	if (giftVoucher === 0) {
		alert("No gift voucher to redeem.");
		return;
	}

	alert(
		`Congratulations! You have redeemed a gift voucher worth Rs${giftVoucher}. Enjoy your shopping!`
	);
	giftVoucher = 0;
	updateVisitorInformation();
}

function updateVisitorInformation() {
	document.getElementById("shopVisits").textContent = shopVisits;
	document.getElementById("totalPurchase").textContent =
		totalPurchase.toFixed(2);
	document.getElementById("giftVoucher").textContent = giftVoucher.toFixed(2);
}

function checkGiftVoucherEligibility() {
	if (shopVisits === 1) {
		giftVoucher += 100;
		updateVisitorInformation();
	}

	if (totalPurchase > 1000 && giftVoucher === 100) {
		giftVoucher += 500;
		updateVisitorInformation();
	}

	if (totalPurchase > 3000 && giftVoucher === 600) {
		giftVoucher += 1500;
		updateVisitorInformation();
	}

	if (totalPurchase > 5000 && giftVoucher === 2100) {
		giftVoucher += 3000;
		updateVisitorInformation();
	}
}
