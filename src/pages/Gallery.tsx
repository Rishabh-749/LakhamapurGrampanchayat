const Gallery = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 village-gradient-text marathi-text">
            फोटो गॅलरी
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto marathi-text">
            गावाची सुंदर छायाचित्रे आणि आठवणी
          </p>
        </div>

        {/* Coming Soon */}
        <div className="text-center bg-muted/30 rounded-lg p-12">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">📸</span>
          </div>
          <h2 className="text-2xl font-bold mb-4 marathi-text">लवकरच येत आहे</h2>
          <p className="text-muted-foreground marathi-text">
            गावाच्या सुंदर छायाचित्रांचा संग्रह लवकरच उपलब्ध होईल
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;