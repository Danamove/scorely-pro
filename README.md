# Scorely Beta - LinkedIn Profile Ranker

A sophisticated web application for ranking and analyzing LinkedIn profiles using AI-powered scoring algorithms. Scorely Beta helps talent acquisition teams identify the best candidates efficiently and objectively.

## 🚀 Features

### Core Functionality
- **CSV Profile Upload** - Bulk import of LinkedIn profile data
- **AI-Powered Ranking** - Hybrid scoring using Embedding + GPT-4
- **Ideal Profile Benchmarking** - Use sample profiles to guide AI scoring
- **Smart Filtering** - Advanced filters for education, experience, location
- **Excellence Indicators** - Automatic detection of high-achiever signals
- **Real-time Progress** - Live tracking of ranking progress
- **Comprehensive Export** - CSV export with detailed scoring breakdown
- **AI Insights Report** - Strategic recommendations and pattern analysis

### Advanced Features
- **Blacklist Management** - Exclude companies from candidate pool
- **In-Process Tracking** - Manage candidates already in recruitment pipeline
- **Progressive Ranking** - Process candidates in batches with feedback integration
- **Session Persistence** - Auto-save progress and resume later
- **Responsive Design** - Optimized for desktop and mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with gradients and animations
- **APIs**: OpenAI GPT-4 and Embeddings
- **Storage**: Local Storage for session management
- **Deployment**: Static hosting (Netlify/GitHub Pages ready)

## 📁 Project Structure

```
scorely-beta/
├── index.html          # Main application file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── script.js       # Application logic and functionality
├── README.md           # This documentation
└── package.json        # NPM dependencies (optional)
```

## 🚀 Quick Start

### Option 1: Direct Deployment
1. Upload all files to your web server
2. Ensure file structure is maintained
3. Access through `index.html`

### Option 2: Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve using a local web server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Option 3: Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
3. Deploy automatically on git push

## ⚙️ Configuration

### API Setup
1. Navigate to the **Setup** tab
2. Enter your OpenAI API key in the **API Configuration** section
3. Optionally add a separate Embedding API key
4. API keys are stored locally and persist between sessions

### CSV Format Requirements
Your LinkedIn profile CSV should include columns such as:
- `firstName`, `lastName`
- `companyName`, `linkedinCompanyUrl`
- `linkedinHeadline`, `linkedinJobTitle`
- `linkedinJobDescription`
- `linkedinSkillsLabel`
- `location`
- Additional profile fields as available

## 📊 Usage Workflow

### 1. Setup Phase
1. **Upload CSV** - Import your LinkedIn profile data
2. **Add Ideal Profiles** - Provide 1-2 example profiles (PDF or text)
3. **Configure Blacklist** - Exclude unwanted companies
4. **Set Job Description** - Define the role requirements
5. **Select Excellence Indicators** - Choose what signals matter
6. **Apply Filters** - Set education, experience, location criteria
7. **Configure AI Enhancement** - Add specific instructions
8. **Choose Model** - Select Hybrid, Embedding-only, or GPT-4-only

### 2. Ranking Phase
1. **Set Batch Parameters** - Choose range and batch size
2. **Monitor Progress** - Watch real-time ranking progress
3. **Provide Feedback** - Adjust scoring weights based on results
4. **Continue/Stop** - Control the ranking process

### 3. Results Phase
1. **Review Categories** - View TOP, GOOD, and AVERAGE candidates
2. **Explore Hidden Gems** - Find unexpected high-potential candidates
3. **Read AI Insights** - Understand patterns and recommendations
4. **Export Data** - Download qualified candidates and insights report

## 🎯 Scoring System

### Scoring Categories
- **Technical Skills** (0-100) - Technical expertise and tools
- **Cultural Fit** (0-100) - Alignment with company culture
- **Experience Level** (0-100) - Relevant experience and progression
- **Startup Readiness** (0-100) - Adaptability and entrepreneurial mindset

### Candidate Categories
- **TOP Candidates** (75-100) - Exceptional fits requiring immediate attention
- **GOOD Candidates** (60-74) - Strong contenders worth serious consideration
- **AVERAGE Candidates** (<60) - May require additional screening
- **Hidden Gems** - Lower overall scores but exceptional in specific areas

### AI Enhancement Features
- **Pattern Recognition** - Identifies success indicators beyond keywords
- **Contextual Analysis** - Understands industry and role-specific requirements
- **Feedback Integration** - Learns from user input to improve accuracy
- **Ideal Profile Matching** - Compares candidates to provided benchmarks

## 📤 Export Capabilities

### Qualified Candidates CSV
- All original profile data
- Detailed scoring breakdown
- Strengths and concerns analysis
- AI insights for each candidate
- LinkedIn profile links

### AI Insights Report
- Common success patterns
- Top companies for talent sourcing
- Recommended search strategies
- Career trajectory analysis
- Skills gap identification
- Actionable next steps

## 🔧 Customization

### Styling
Modify `css/style.css` to customize:
- Color schemes and branding
- Layout and spacing
- Animation effects
- Responsive breakpoints

### Functionality
Extend `js/script.js` to add:
- Custom scoring algorithms
- Additional API integrations
- Enhanced export formats
- Advanced filtering options

### Configuration
Update settings in the application:
- Model weights and preferences
- Default filter values
- Excellence indicator definitions
- UI text and labels

## 🔐 Security Considerations

- **API Keys**: Stored locally in browser, never transmitted to external servers
- **Data Privacy**: All processing happens client-side or through OpenAI APIs
- **Session Storage**: Profile data remains in local browser storage
- **Reset Functionality**: Complete data wipe available anytime

## 🐛 Troubleshooting

### Common Issues

**CSV Upload Fails**
- Ensure CSV format matches expected structure
- Check for special characters in file names
- Verify file size is reasonable (<50MB recommended)

**Ranking Stops Unexpectedly**
- Check API key validity and quota
- Verify internet connection stability
- Review browser console for error messages

**Export Not Working**
- Ensure browser allows file downloads
- Check popup blocker settings
- Try different export format

**Performance Issues**
- Reduce batch size for large datasets
- Close unnecessary browser tabs
- Consider processing in smaller chunks

### Browser Compatibility
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+

## 📈 Performance Tips

1. **Batch Size**: Use 20-50 profiles per batch for optimal performance
2. **API Limits**: Monitor OpenAI usage to avoid rate limits
3. **Memory Management**: Reset session periodically for large datasets
4. **Network**: Ensure stable internet connection during ranking

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Coding Standards
- Use ES6+ JavaScript features
- Follow existing code style
- Add comments for complex logic
- Ensure responsive design compatibility

## 📝 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For issues, questions, or feature requests:
1. Check this README for common solutions
2. Review browser console for error messages
3. Contact the development team with specific details

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Complete ranking system
- Export functionality
- AI insights generation
- Responsive design
- Session persistence

### Planned Features
- Batch API processing
- Advanced analytics dashboard
- Team collaboration features
- Integration with ATS systems
- Custom scoring model training

---

**Scorely Beta** - Revolutionizing talent acquisition through AI-powered candidate ranking.
