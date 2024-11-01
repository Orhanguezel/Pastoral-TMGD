export function loadHeader() {
  const header = document.getElementById("header");

  // Şu anki sayfanın adını belirleyin
  const currentPage = window.location.pathname.split("/").pop();

  // Sayfaya göre farklı linkler tanımlayın
  const linkPrefix = currentPage === "index.html" ? "" : "index.html";

  header.innerHTML = `
       <header>
          <div class="header-top">
              <a href="index.html">
                  <img src="assets/logo.png" alt="Pastoral TMGD Logo" class="header-logo">
              </a>
              <div class="top-links">
                  <a href="#"><i class="fas fa-sitemap"></i> Sitemap</a> 
                  <a href="#"><i class="fas fa-search"></i> Arama</a>
              </div>
              <div class="mobile-menu-button" id="menu-toggle">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
          </div>
          <nav class="pastoral-main-nav" id="main-nav">
              <ul>
                  <li class="pastoral-dropdown">
                      <a href="index.html" class="pastoral-nav-button" id="anasayfa">
                          <i class="fas fa-home"></i> Anasayfa
                      </a>
                  </li>
                  <li class="pastoral-dropdown">
                      <a href="javascript:void(0);" class="pastoral-nav-button" id="kurumsal">
                          <i class="fas fa-building"></i> Kurumsal
                      </a>
                      <div class="pastoral-dropdown-content">
                          <div class="pastoral-dropdown-row">
                              <div class="pastoral-dropdown-column kurumsal-dropdown">
                                  <ul>
                                      <li><a href="#" class="upper-level">Hakkımızda</a>
                                          <ul>
                                              <li><a href="${linkPrefix}#vision">Misyonumuz ve Vizyonumuz</a></li>
                                              <li><a href="${linkPrefix}#quality">Kalite Politikamız</a></li>
                                              <li><a href="basvuru.html">Bizimle Çalışır mısınız?</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#" class="upper-level">Faaliyetlerimiz</a>
                                          <ul>
                                              <li><a href="#">Çalışma Alanları</a></li>
                                              <li><a href="${linkPrefix}#certificates">Sertifikalarımız ve Üyeliklerimiz</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="pastoral-dropdown">
                      <a href="javascript:void(0);" class="pastoral-nav-button" id="hizmetler">
                          <i class="fas fa-briefcase"></i> Hizmetlerimiz
                      </a>
                      <div class="pastoral-dropdown-content">
                          <div class="pastoral-dropdown-row">
                              <div class="pastoral-dropdown-column hizmetler-dropdown">
                                  <ul>
                                      <li><a href="#" class="upper-level">Hizmet Verdiğimiz Sektörler</a>
                                          <ul>
                                              <li><a href="#">Kimya Sanayi TMGD</a></li>
                                              <li><a href="#">Hastane ve Sağlık TMGD</a></li>
                                              <li><a href="#">Akaryakıt ve Petrol TMGD</a></li>
                                              <li><a href="#">Tekstil ve Deri Sektörü</a></li>
                                              <li><a href="#">Lojistik ve Depolama Sektörü</a></li>
                                              <li><a href="#">Ambalaj ve Baskı Sanayi</a></li>
                                              <li><a href="#">Gemi İnşa ve Bakım Sanayi</a></li>
                                              <li><a href="#">Kozmetik ve Temizlik Sanayi</a></li>
                                              <li><a href="#">Otomotiv Sanayi TMGD</a></li>
                                              <li><a href="#">Belediyeler İçin TMGD</a></li>
                                              <li><a href="#">Cam Sektörü TMGD</a></li>
                                              <li><a href="#">Doğal Taş Sektörü İçin TMGD</a></li>
                                              <li><a href="#">Gıda Sektörü TMGD</a></li>
                                          </ul>
                                      </li>
                                       <li><a href="#" class="upper-level">TMGDK</a>
<li><a href="#" class="upper-level">TMGDK</a>
    <ul id="tmgdk-submenu">
        <li><a href="hizmetlerimiz.html#tehlikeli-madde-gvenlik-danmanl-hizmetleri">Tehlikeli Madde Güvenlik Danışmanlığı Hizmetleri</a></li>
        <li><a href="hizmetlerimiz.html#tehlikeli-madde-faaliyet-belgesi-tmfb">Tehlikeli Madde Faaliyet Belgesi (TMFB)</a></li>
        <li><a href="hizmetlerimiz.html#kkdik-kdu-hizmetleri">KKDİK – KDU Hizmetleri</a></li>
        <li><a href="hizmetlerimiz.html#adr-muafiyet-raporu">ADR Muafiyet Raporu</a></li>
        <li><a href="hizmetlerimiz.html#tmgd-eitimleri">TMGD Eğitimleri</a></li>
        <li><a href="hizmetlerimiz.html#ambalaj-zellikleri-belirlenmesi-ve-etiketleme">Ambalaj Özellikleri Belirlenmesi ve Etiketleme</a></li>
        <li><a href="hizmetlerimiz.html#kkdik-turkey-reach-nedir">KKDİK (Turkey REACH) Nedir?</a></li>
        <li><a href="hizmetlerimiz.html#uluslararas-numune-gnderimleri">Uluslararası Numune Gönderimleri</a></li>
        <li><a href="hizmetlerimiz.html#risk-analizi">Risk Analizi</a></li>
    </ul>
</li>


                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="pastoral-dropdown">
                      <a href="javascript:void(0);" class="pastoral-nav-button" id="belgeler">
                          <i class="fas fa-folder-open"></i> Belgeler
                      </a>
                      <div class="pastoral-dropdown-content">
                          <div class="pastoral-dropdown-row">
                              <div class="pastoral-dropdown-column belgeler-dropdown">
                                  <ul>
                                      <li><a href="#" class="upper-level">Mevzuatlar</a>
                                          <ul>
                                              <li><a href="#">Kanunlar</a></li>
                                              <li><a href="#">Yönetmelikler</a></li>
                                              <li><a href="#">Yönergeler</a></li>
                                              <li><a href="#">Genelgeler</a></li>
                                              <li><a href="#">Uluslararası Sözleşmeler</a></li>
                                              <li><a href="#">Tebliğler</a></li>
                                              <li><a href="#">Talimatlar</a></li>
                                              <li><a href="#">Duyurular</a></li>
                                          </ul>
                                      </li>
                                      <li><a href="#" class="upper-level">Diğer</a>
                                          <ul>
                                              <li><a href="basvuru.html">İş Başvuru Formu</a></li>
                                              <li><a href="#">Teklif İsteyiniz</a></li>
                                              <li><a href="sss.html">Sıkça Sorulan Sorular</a></li>
                                              <li><a href="#">Cezalar</a></li>
                                              <li><a href="#">Fiyatlandırma</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </nav>
        </header>
    `;

  // FontAwesome İkonları dahil et
  const fontAwesomeLink = document.createElement("link");
  fontAwesomeLink.rel = "stylesheet";
  fontAwesomeLink.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
  document.head.appendChild(fontAwesomeLink);

  // Dropdown menüyü hover olayına göre aç/kapat
  const dropdownItems = document.querySelectorAll(".pastoral-dropdown");
  dropdownItems.forEach((dropdown) => {
    const content = dropdown.querySelector(".pastoral-dropdown-content");

    // Hover ile açma
    dropdown.addEventListener("mouseenter", () => {
      content.classList.add("pastoral-show");
    });

    // Hover dışına çıkıldığında kapama
    dropdown.addEventListener("mouseleave", () => {
      content.classList.remove("pastoral-show");
    });
  });

  // Mobil menü açma/kapatma işlevselliği ve animasyonlar
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const bars = document.querySelectorAll(".bar");

  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("pastoral-mobile-visible");
    menuToggle.classList.toggle("open");

    // Hamburger menünün çubuklarının animasyonu
    bars.forEach((bar, index) => {
      if (index === 0) {
        bar.classList.toggle("rotate-down");
      } else if (index === 1) {
        bar.classList.toggle("hide");
      } else if (index === 2) {
        bar.classList.toggle("rotate-up");
      }
    });
  });
}