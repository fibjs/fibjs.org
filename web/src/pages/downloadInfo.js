import 'common';
import 'js/icons';

var downloadOsSelected = "Linux"
var downloadTargetSelected = ""
var downloadArchSelected = ""
var downloadTypeSelected = ""
var lastArchSelectedDom = undefined
var latestVersion = "v0.37.0"
fetch('https://fibjs.org/dist/version.txt')
    .then(response => response.text())
    .then(data => {
        if (data) {
            latestVersion = data;
            $('.download-detail-version').text(data)
        }
    })
    .catch(error => {
        $('.download-detail-version').text(latestVersion)
        $('.download-code-detail-tar').text('src-' + latestVersion + '.tar.gz')
        $('.download-code-detail-zip').text('src-' + latestVersion + '.zip')
        $('.download-code-detail-full').text('fullsrc.zip')
    })
if (downloadOsSelected == "Linux") {
    $('.download-detail-windows').css('display', 'none');
    $('.download-detail-darwin').css('display', 'none');
    $('.download-detail-linux').css('display', 'inline-block');
}

function checkStatus() {
    if (!downloadTargetSelected) {
        $('.download-detail-arch').attr('disabled', true);
        $('.download-detail-arch').css('background-color', '#f5f5f5');
        $('.download-detail-arch').css('color', '#333333');
    }
}

checkStatus()

$('.download-change-log').click(function (e) {
    if (latestVersion.length > 0) {
        window.location.href = "/download/" + latestVersion + ".html"
    }
})

$('.download-detail-os').click(function (e) {
    if (e.target.innerText == downloadOsSelected) {
        return;
    }
    lastArchSelectedDom = undefined
    $('.download-detail').attr('disabled', false);
    $('.download-detail').css('background-color', '#ffffff');
    $('.download-detail-os').css('background-color', '#fff');
    $('.download-detail-os').css('color', '#333333');
    downloadTargetSelected = ""
    $('.download-detail-target').css('background-color', '#fff');
    $('.download-detail-target').css('color', '#333333');

    e.target.style.backgroundColor = '#0088cc';
    e.target.style.color = '#ffffff';
    downloadTargetSelected = ""
    downloadArchSelected = ""
    downloadTypeSelected = ""
    downloadOsSelected = e.target.innerText;
    if (e.target.innerText == "Linux") {
        $('.download-detail-windows').css('display', 'none');
        $('.download-detail-darwin').css('display', 'none');
        $('.download-detail-linux').css('display', 'inline-block');
    } else if (e.target.innerText == "Windows") {
        $('.download-detail-linux').css('display', 'none');
        $('.download-detail-windows').css('display', 'inline-block');
        $('.download-detail-darwin').css('display', 'none');
    } else if (e.target.innerText == "Darwin") {
        $('.download-detail-linux').css('display', 'none');
        $('.download-detail-windows').css('display', 'none');
        $('.download-detail-darwin').css('display', 'inline-block');
    }
    checkStatus()
    generateDownloadUrl()
});
$('.download-detail-target').click(function (e) {
    if (e.target.innerText == downloadArchSelected) {
        return;
    }
    downloadArchSelected = ""
    $('.download-detail-arch').attr('disabled', false);
    $('.download-detail-arch').css('background-color', '#fff');
    $('.download-detail-arch').css('color', '#333333');
    downloadTypeSelected = ""
    $('.download-detail-target').css('background-color', '#fff');
    $('.download-detail-target').css('color', '#333333');
    downloadTargetSelected = e.target.innerText;
    e.target.style.backgroundColor = '#0088cc';
    e.target.style.color = '#ffffff';
    changeArchDisable(e.target.innerText);
    generateDownloadUrl()
});

const changeArchDisable = (target) => {
    if (target === 'Glib') {
        $('.download-detail-arch').attr('disabled', false);
        if (lastArchSelectedDom) {
            lastArchSelectedDom.target.style.backgroundColor = '#0088cc';
            lastArchSelectedDom.target.style.color = '#ffffff';
            downloadArchSelected = lastArchSelectedDom.target.innerText;
        } else {
            lastArchSelectedDom = undefined
            downloadArchSelected = ''
        }
    } else if (target === 'Musl' || downloadOsSelected === 'Windows') {
        $('.download-detail-arch-dismusl').attr('disabled', true);
        $('.download-detail-arch-dismusl').css('background-color', '#f5f5f5');
        if (lastArchSelectedDom && (
            lastArchSelectedDom.target.innerText === 'x64'
            || lastArchSelectedDom.target.innerText === 'ia32'
            || lastArchSelectedDom.target.innerText === 'arm64'
        )
        ) {
            lastArchSelectedDom.target.style.backgroundColor = '#0088cc';
            lastArchSelectedDom.target.style.color = '#ffffff';
            downloadArchSelected = lastArchSelectedDom.target.innerText;
        } else {
            lastArchSelectedDom = undefined
            downloadArchSelected = ''
        }
    } else if (target === 'Android') {
        $('.download-detail-arch-dismusl').attr('disabled', true);
        $('.download-detail-arch-dismusl').css('background-color', '#f5f5f5');
        $('.download-detail-arch-arm').attr('disabled', false);
        $('.download-detail-arch-arm').css('background-color', '#ffffff');
        if (lastArchSelectedDom && (
            lastArchSelectedDom.target.innerText === 'x64'
            || lastArchSelectedDom.target.innerText === 'ia32'
            || lastArchSelectedDom.target.innerText === 'arm'
            || lastArchSelectedDom.target.innerText === 'arm64'
        )
        ) {
            lastArchSelectedDom.target.style.backgroundColor = '#0088cc';
            lastArchSelectedDom.target.style.color = '#ffffff';
            downloadArchSelected = lastArchSelectedDom.target.innerText;
        } else {
            lastArchSelectedDom = undefined
            downloadArchSelected = ''
        }
    } else if (downloadOsSelected === 'Darwin') {
        $('.download-detail-arch-disdarwin').attr('disabled', true);
        $('.download-detail-arch-disdarwin').css('background-color', '#f5f5f5');
        if (lastArchSelectedDom && (
            lastArchSelectedDom.target.innerText === 'x64'
            || lastArchSelectedDom.target.innerText === 'arm64'
        )
        ) {
            lastArchSelectedDom.target.style.backgroundColor = '#0088cc';
            lastArchSelectedDom.target.style.color = '#ffffff';
            downloadArchSelected = lastArchSelectedDom.target.innerText;
        } else {
            lastArchSelectedDom = undefined
            downloadArchSelected = ''
        }
    } else {
        $('.download-detail-arch-dismusl').attr('disabled', false);
        $('.download-detail-arch-dismusl').css('background-color', '#ffffff');
        $('.download-detail-arch-arm').attr('disabled', false);
        $('.download-detail-arch-arm').css('background-color', '#ffffff');
    }
}

$('.download-detail-arch').click(function (e) {
    if (downloadTargetSelected.length === 0 || e.target.innerText === downloadArchSelected) {
        return;
    }
    lastArchSelectedDom = e;
    $('.download-detail-arch').css('background-color', '#fff');
    $('.download-detail-arch').css('color', '#333333');
    changeArchDisable(downloadTargetSelected);
    downloadTypeSelected = ''
    e.target.style.backgroundColor = '#0088cc';
    e.target.style.color = '#ffffff';
    downloadArchSelected = e.target.innerText;
    generateDownloadUrl()
});

$('.download-detail-type').click(function (e) {
    window.open('https://fibjs.org/dist/' + latestVersion + '/' + e.target.innerText)
})

function generateDownloadUrl() {
    if (!downloadTargetSelected || !downloadArchSelected || !downloadOsSelected) {
        $('.download-detail-type').css('display', 'none')
        $('.download-detail-tips').css('display', 'inline-block')
        return;
    }
    var name3 = ""
    var name4 = ""
    var ext = ""
    if (downloadTargetSelected === 'Musl') {
        name3 = 'alpine'
    } else if (downloadTargetSelected === 'Android') {
        name3 = 'android'
    } else if (downloadTargetSelected === 'Glib') {
        name3 = 'linux'
    } else if (downloadTargetSelected === 'iPhone') {
        name3 = 'iphone'
    } else if (downloadTargetSelected === 'macOS') {
        name3 = 'darwin'
    } else if (downloadTargetSelected === 'GUI') {
        name3 = 'win32-gui'
    } else if (downloadTargetSelected === 'CONSOLE') {
        name3 = 'win32'
    }
    if (downloadArchSelected === 'arm') {
        name4 = 'arm'
    } else if (downloadArchSelected === 'arm64') {
        name4 = 'arm64'
    } else if (downloadArchSelected === 'ia32') {
        name4 = 'ia32'
    } else if (downloadArchSelected === 'loong64') {
        name4 = 'loong64'
    } else if (downloadArchSelected === 'loong64ow') {
        name4 = 'loong64ow'
    } else if (downloadArchSelected === 'mips64') {
        name4 = 'mips64'
    } else if (downloadArchSelected === 'ppc64') {
        name4 = 'ppc64'
    } else if (downloadArchSelected === 'riscv64') {
        name4 = 'riscv64'
    } else if (downloadArchSelected === 'x64') {
        name4 = 'x64'
    }
    var installerExt = downloadOsSelected === 'Windows' ? ext = '.exe' : ext = '.sh'
    var sourceExt = downloadOsSelected === 'Windows' ? ext = '.zip' : ext = '.tar.gz'
    var binaryExt = downloadOsSelected === 'Windows' ? ext = '.exe' : ext = ''
    $('.download-detail-type-binary').text('fibjs' + '-' + latestVersion + '-' + name3 + '-' + name4 + binaryExt)
    $('.download-detail-type-source').text('fibjs' + '-' + latestVersion + '-' + name3 + '-' + name4 + sourceExt)
    $('.download-detail-type').css('display', 'inline-block');
    if (downloadOsSelected === 'Windows' && downloadTargetSelected === 'GUI') {
        $('.download-detail-type-install').css('display', 'none')
    } else {
        $('.download-detail-type-install').text('installer' + '-' + latestVersion + '-' + name3 + '-' + name4 + installerExt)
    }
    $('.download-detail-tips').css('display', 'none')
}

$('.download-code-detail-tar').click(function (e) {
    if (latestVersion) {
        window.open('https://fibjs.org/dist/' + latestVersion + '/src-' + latestVersion + '.tar.gz')
    }
})
$('.download-code-detail-zip').click(function (e) {
    if (latestVersion) {
        window.open('https://fibjs.org/dist/' + latestVersion + '/src-' + latestVersion + '.zip')
    }
})
$('.download-code-detail-full').click(function (e) {
    if (latestVersion) {
        window.open('https://fibjs.org/dist/' + latestVersion + '/fullsrc.zip')
    }
})
