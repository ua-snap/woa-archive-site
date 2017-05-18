$(document).ready(function () {
	$("#nanoGallery1").nanoGallery({
		kind: 'flickr',
		userID: 'snapandaccap',
		photoset: '72157680808989323',

		thumbnailWidth: 'auto',
		thumbnailHeight: 200,

		thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
		theme: 'light',
		thumbnailGutterWidth : 3,
		thumbnailGutterHeight : 3,
		i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
		thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' }
	});

	$("#toggleNews").on('click', function() {
		$(".extra.news").toggle();
		$("#toggleNews").hide();
	});

	$("#toggleFellows").on('click', function() {
		$(".extra.fellows").toggle();
		$("#toggleFellows").hide();
	});

	$("#toggleArt").on('click', function() {
		$(".extra.art").toggle();
		$("#toggleArt").hide();
	});
});

