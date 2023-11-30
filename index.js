var togglePassword = document.getElementById("togglePassword");
var passwordlogin = document.getElementById("matkhau_dn");
// togglePassword.addEventListener("click", (e) => {
//   let type =
//     passwordlogin.getAttribute("type") === "password" ? "text" : "password";

//   passwordlogin.setAttribute("type", type);

//   // toggle the icon

//   togglePassword.classList.toggle("bi-eye");
// });
function togglePasswordVisibility() {
  let type =
    passwordlogin.getAttribute("type") === "password" ? "text" : "password";

  passwordlogin.setAttribute("type", type);
  // toggle the icon

  togglePassword.classList.toggle("bi-eye");
}

function sendSearch() {
  var search = document.getElementById("Search");

  if (search.value.length < 1) {
    alert("Bạn chưa nhập thông tin tìm kiếm!");
  } else {
    alert("Thông tin tìm kiếm đã được gửi!");
  }
}

function sendInformation() {
  var emaillogin = document.getElementById("email_dn");
  var passwordlogin = document.getElementById("matkhau_dn");

  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (emailRex.test(emaillogin.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (passwordlogin.value.length < 1) {
    alert("Ban chua nhap mat khau!");
    return false;
  }

  alert("Dang nhap thanh cong");
}

function sendInformationSignUp() {
  var formSignUp = document.getElementById("form_signUp");
  var name = document.getElementById("dk_ten");
  var surname = document.getElementById("dk_ho");
  var email = document.getElementById("dk_email");
  var password = document.getElementById("passwordlogin");

  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (name.value.length < 1) {
    alert("Bạn chưa nhập tên!");
    return false;
  }
  if (surname.value.length < 1) {
    alert("Bạn chưa nhập Họ!");
    return false;
  }

  if (emailRex.test(email.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (password.value.length < 1) {
    alert("Ban chua nhap mat khau!");
    return false;
  }

  alert("Dang nhap thanh cong");
  //   formSignUp.onsubmit();
}

// Đạt
var productList = [
  {
    code: "sp01",
    name: "Nhẫn bạc",
    price: 10000,
    photo: "../assets/sanpham/sp1.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp02",
    name: "Nhẫn kim cương",
    price: 20000,
    photo: "../assets/sanpham/sp2.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp03",
    name: "Dây chuyền tím",
    price: 30000,
    photo: "../assets/sanpham/sp3.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp04",
    name: "Dây chuyền Đại dương",
    price: 40000,
    photo: "../assets/sanpham/sp4.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp05",
    name: "Lắc tay nâu đỏ",
    price: 50000,
    photo: "../assets/sanpham/sp5.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp06",
    name: "Lắc tay thần kỳ",
    price: 60000,
    photo: "../assets/sanpham/sp6.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp07",
    name: "Nhẫn Supper Start",
    price: 70000,
    photo: "../assets/sanpham/sp7.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp08",
    name: "Nhẫn cưới Ngày xuân",
    price: 80000,
    photo: "../assets/sanpham/sp8.jpg",
    count: 0,
    total: 0,
  },
  {
    code: "sp09",
    name: "Nhẫn Hoa hậu",
    price: 90000,
    photo: "../assets/sanpham/sp9.jpg",
    count: 0,
    total: 0,
  },
];
// Thêm vào giỏ hàng
var addCart = function (code) {
  var input = document.getElementById(code);
  //Số lượng nhập vào từ input
  var number = parseInt(input.value);
  if (number > 0) {
    if (localStorage[code] == undefined) {
      // Đưa số lượng vào localStorage
      localStorage.setItem(code, number);
      alert("Đã thêm vào giỏ hàng!");
    } else {
      // Lấy số lượng đã có trong localStorage
      var current = parseInt(localStorage.getItem(code));
      // Thêm số lượng vào localStorage
      localStorage.setItem(code, current + number);
      alert("Đã thêm vào giỏ hàng!");
    }
  }
};

// Đưa vào giao diện giỏ hàng
var table = document.getElementById("product-cart");
var tableBody = document.getElementById("tableBody");

productList.forEach(function (product) {
  var sl = parseInt(localStorage.getItem(product.code));
  if (typeof sl == "number" && sl > 0) {
    product.count = sl;
    product.total = product.price * product.count;
  }
});

var total = 0;
var charge = 0;
var tax = 0;
var finalTotal = 0;
// Tính thành tiền
// console.log(productList);
productList.forEach(function (product) {
  if (product.total > 0) total += product.total;
});
// Tính tiền công thợ
charge = 0.05 * total;
// Tính tiền thuế
tax = 0.1 * total;
// Tính tiền tổng cuối
finalTotal = total + charge + tax;

// Hiển thị sản phẩm
var showCart = function () {
  var numberOfProduct = 0;
  productList.forEach(function (product) {
    numberOfProduct += 1;
    // Đếm số lượng sản phẩm trong giỏ hàng
    if (product.count > 0) {
      // Tạo từng hàng
      var tr = document.createElement("tr");

      // Đưa hình ảnh vào
      var td_photo = document.createElement("td");
      td_photo.innerHTML = `<img src="${product.photo}" alt="" "/>`;
      tr.appendChild(td_photo);

      // Đưa tên sản phẩm vào
      var td_name = document.createElement("td");
      td_name.innerHTML = `<span>${product.name}</span>`;
      tr.appendChild(td_name);

      // Đưa số lượng vào
      var td_count = document.createElement("td");
      td_count.innerHTML = `<span>${product.count}</span>`;
      tr.appendChild(td_count);

      // Đưa giá sản phẩm vào
      var td_price = document.createElement("td");
      td_price.innerHTML = `<span>${product.price}</span>`;
      tr.appendChild(td_price);

      // Đưa tổng tiền vào
      var td_total = document.createElement("td");
      td_total.innerHTML = `<span>${product.total}</span>`;
      tr.appendChild(td_total);

      // Tạo nút xóa
      var td_btn = document.createElement("td");
      td_btn.innerHTML = `<button id="${product.code}" class="delete_product_btn">Xoá</button>`;

      // Xóa liền tại chỗ
      td_btn.onclick = function (e) {
        localStorage.removeItem(e.target.id);
        location.reload("giohang.html");
        // update();
      };
      tr.appendChild(td_btn);

      // Thêm hàng vừa tạo vào bảng
      tableBody.appendChild(tr);
    }
  });
  if (numberOfProduct != 0) {
    //Hiển thị tính tiền ở thẻ tfoot
    var tdA = document.getElementById("tdA");
    tdA.innerText = `Thành tiền (A) = ${total} VNĐ`;
    var tdB = document.getElementById("tdB");
    tdB.innerText = `Tiền công thợ (B) = 5% x A = ${charge} VNĐ`;
    var tdC = document.getElementById("tdC");
    tdC.innerText = `Thuế (C) = 10% x A = ${tax} VNĐ`;
    var tdD = document.getElementById("tdD");

    //Có dùng span nên dùng innerHTML thay vì innerText
    tdD.innerHTML = `Tổng cộng (D) = A+B+C = <span>${finalTotal} VNĐ</span>`;
  }
};

/////////////////////////////////

function checkvalidate() {
  var fsm = document.getElementById("fsm");
  var sanpham = document.getElementById("sanpham");
  var name = document.getElementById("name");
  var soluong = document.getElementById("soluong");
  var test = document.getElementById("test");

  if (name.value.length == 0) {
    alert("Ban chua nhap");
    console.log("......");
    return false;
  }
  if (soluong.value.length == 0) {
    alert("Ban chua nhap");
    console.log("......");
    return false;
  }
  if (test.value.length == 0) {
    alert("Ban chua nhap");
    console.log("......");
    return false;
  }

  alert("Form da gui");
  fsm.submit();
}

function resetInput() {
  var fsm = document.getElementById("fsm");
  var sanpham = document.getElementById("sanpham");
  var name = document.getElementById("name");
  var soluong = document.getElementById("soluong");
  var test = document.getElementById("test");

  if (name.value.length > 0) {
    name.value = "";
    alert(",,,,");
  }
  if (soluong.value.length > 0) {
    soluong.value = "";
  }
  if (test.value.length > 0) {
    test.value = "";
  }
}

TenDangnhap = [
  {
    Hoten: "Nguyen",
    email: "aaa",
    password: "1234",
  },
  {
    Hoten: "Bao",
    emial: "bbb",
    password: "1234",
  },
];

function checkLogin() {
  var user = document.getElementById("user");
  var password = document.getElementById("password");
  var check = document.getElementById("check");
  var valueUser = user.value;
  var valuePassword = password.value;
  console.log(valueUser);
  console.log(TenDangnhap[0].Hoten);
  var ischecked = check.checked;

  if (
    valueUser.length < 1 &&
    (valueUser !== TenDangnhap[0].Hoten || valueUser !== TenDangnhap[1].Hoten)
  ) {
    alert("Ban chua nhap ho ten hoac nhap ko dung");
    return false;
  }
  if (password.value.length < 1) {
    if (valueUser !== TenDangnhap[0].Hoten) {
      if (valuePassword !== TenDangnhap[0].password) {
        alert("Ban chua nhap mat khau hoac mat khau ko dung");
        return false;
      }
    }
    if (valueUser !== TenDangnhap[1].Hoten) {
      if (valuePassword !== TenDangnhap[1].password) {
        alert("Ban chua nhap mat khau hoac mat khau ko dung");
        return false;
      }
    }
  }

  if (ischecked == true) {
    localStorage.setItem(valueUser, valueUser);
  }
  return true;
}

function changeText() {
  var user = document.getElementById("user");
  var change = document.getElementById("content");
  var valueUser = user.value;
  if (checkLogin()) {
    for (let i = 0; i < localStorage.length; i++) {
      if (valueUser === localStorage.key(i)) {
        change.innerHTML =
          "Chao" +
          " " +
          localStorage.getItem(localStorage.key(0)) +
          "  | Thoat";
        return;
      }
    }
  }
}
